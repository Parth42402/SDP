const hospitalModel=require('../models/hospitalModel')
const userModel=require('../models/userModels')

const getAllUserController=async(req,res)=>{
    try{
        const users=await userModel.find({})
        res.status(200).send({
            success:true,
            message:'Users data',
            data:users
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while fetching users'
        })
    }
}

const getAllHospitalsController=async(req,res)=>{
    try{

        const hospitals=await hospitalModel.find({})
        res.status(200).send({
            success:true,
            message:'Hospitals data',
            data:hospitals
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while fetching hospitals'
        })
    }

}


//account status
const changeAccountStatusController=async(req,res)=>{
    try{
        const {hospitalId,status}=req.body
        const hospital=await hospitalModel.findByIdAndUpdate(hospitalId,{status})
        const user=await userModel.findOne({_id:hospital.userId})  
        const notification=user.notification
        notification.push({
            type:'hospital-account-request-updated',
            message:`Your Hospital Account Request ${status}`,
            onClickPath:'/notification'
        })
        user.isDoctor=status==='approved'? true:false
        await user.save()
        res.status(201).send({
            success:true,
            message:"Account Status Updated",
            data:hospital
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while Account Status'
        })
    }
}

module.exports={getAllUserController,getAllHospitalsController,changeAccountStatusController}
