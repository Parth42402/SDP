const appointmentModel = require("../models/appointmentModel")
const hospitalModel = require("../models/hospitalModel")
const userModel = require("../models/userModels")

const getHospitalInfoController=async(req,res)=>{
    try{
        const hospital=await hospitalModel.findOne({userId:req.body.userId})
        res.status(200).send({
            success:true,
            message:'Doctor data fetch success',
            data:hospital
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Erro in Fetching Hospital Details'
        })
    }
}

//update hospital profile
const updateProfileController=async(req,res)=>{
    try{
        const hospital=await hospitalModel.findOneAndUpdate({userId:req.body.userId},req.body)
        res.status(201).send({
            success:true,
            message:'Hospital profile Updated',
            data:hospital
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Hospital profile update issue'
        })
    }
}

const getHosByIdController=async(req,res)=>{
    try{
        const hospital=await hospitalModel.findOne({_id:req.body.hospitalId})
        res.status(200).send({
            success:true,
            message:'Single Hospital Info Fetched',
            data:hospital
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Hospital profile update issue'
        })
    }

}

const hospitalAppointmentsController=async(req,res)=>{
    try{
        const hospital=await hospitalModel.findOne({userId:req.body.userId})
        const appointments=await appointmentModel.find({hospitalId:hospital._id})
        res.status(200).send({
            success:true,
            message:"Hospital Appointments fetch Successfully",
            data:appointments
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Hospital profile update issue'
        })
    }
}

const updateStatusController=async(req,res)=>{
    try{
        const {appointmentsId,status}=req.body
        const appointments=await appointmentModel.findByIdAndUpdate(appointmentsId,{status})
        const user=await userModel.findOne({_id:appointments.userId})
        const notification=user.notification
        notification.push({
            type:'Status Updated',
            message:`Your appointment has been updated ${status}`,
            onClickPath:'/hospital-appointments'
        })
        await user.save()
        res.status(200).send({
            success:true,
            message:'Appointment Status Updated'
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in update Status'
        })
    }
}
module.exports={getHospitalInfoController,updateProfileController,getHosByIdController,hospitalAppointmentsController,updateStatusController}