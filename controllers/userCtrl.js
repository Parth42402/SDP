const userModel=require('../models/userModels')
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')
const hospitalModel=require('../models/hospitalModel')
const appointmentModel=require('../models/appointmentModel')
const moment = require('moment')

const registerController=async(req,res)=>{
    try{
        const existingUSer=await userModel.findOne({email:req.body.email})
        if(existingUSer){
            return res.status(200).send({message:'User Already exists',success:false})
        }
        const password=req.body.password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        req.body.password=hashedPassword
        const newUser=new userModel(req.body)
        await newUser.save();
        res.status(201).send({message:"Register Successfully",success:true});
    }catch(error){
        console.log(error)
        res.status(500).send({success:false,message:`Register Controller ${error.message}`})
    }
}
const loginController=async(req,res)=>{
    try{
        const user=await userModel.findOne({email:req.body.email})
        if(!user){
            return res.status(200).send({message:'User not found',success:false})   
        }
        const isMatch=await bcrypt.compare(req.body.password,user.password)
        if(!isMatch){
            return res.status(200).send({message:'Invalid Email or Password',success:false})
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
        res.status(200).send({message:"Login Successfull",success:true,token})
    }catch(error){
        console.log(error);
        res.status(500).send({message:`Error in Login CTRL ${error.message}`})
    }
}

const authController=async(req,res)=>{
    try{
        const user=await userModel.findById({_id:req.body.userId})
        user.password=undefined;
        if(!user){
            return res.status(200).send({message:'user not found',success:false})
        }
        else{
            res.status(200).send({
                success:true,
                data:user
            })
        }
    }catch(error){
        console.log(error)
        res.status(500).send({message:'auth error',success:false,error})
    }
}

//apply Hospital controller
const applyHospitalController=async(req,res)=>{
    try{
        const newHos=await hospitalModel({...req.body,status:'pending'})
        await newHos.save()
        const adminUser=await userModel.findOne({isAdmin:true})
        const notification=adminUser.notification
        notification.push({
            type:'apply-Hospital-request',
            message:`${newHos.hos_name} Has Applied For A Hospital Account`,
            data:{
                hospitalId:newHos._id,
                name:newHos.hos_name,
                onClickPath:'/admin/hospitals'
            }
        })
        await userModel.findByIdAndUpdate(adminUser._id,{notification})
        res.status(201).send({
            success:true,
            message:'Hospital Account Applied Successfully'

        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error While Applying Hospital'
        })
    }
}

//notification Controller
const getAllNotificationController=async(req,res)=>{
    try{
        const user=await userModel.findOne({_id:req.body.userId})
        const seennotification=user.seennotification
        const notification=user.notification
        seennotification.push(...notification)
        user.notification=[]
        user.seennotification=notification
        const updatedUser=await user.save()
        res.status(200).send({
            success:true,
            message:'all notification marked as read',
            data:updatedUser
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in notification'
        })
    }
}

const deleteAllNotificationController=async(req,res)=>{
    try{
        const user=await userModel.findOne({_id:req.body.userId})
        user.notification=[]
        user.seennotification=[]
        const updatedUser=await user.save()
        updatedUser.password=undefined
        res.status(200).send({
            success:true,
            message:'Notification Deleted Successfully',
            data:updatedUser
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Unable to delete all notification'
        })
    }
}

//get All Hos Controller

const getAllHosController=async(req,res)=>{
    try{
const hospitals=await hospitalModel.find({status:'approved'})
res.status(200).send({
    success:true,
    message:"Hospitals List Fetched Successfully",
    data:hospitals
})
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while feching hospitals..'
        })
    }
}

//Book Appointment
const bookAppointmentController=async(req,res)=>{
    try{
        req.body.date=moment(req.body.date,'DD-MM-YYYY').toISOString()
        req.body.time=moment(req.body.time,'HH:mm').toISOString()
        req.body.status='pending'
        const newAppointment=new appointmentModel(req.body)
        await newAppointment.save()
        const user=await userModel.findOne({_id:req.body.hospitalInfo.userId})
        user.notification.push({
            type:'New-Appointment-Request',
            message:`A new Appointment Request from ${req.body.userInfo.name}`,
            onClickPath:'/user/appointments'
        })
        await user.save()
        res.status(200).send({
            success:true,
            message:'Appointment Book Successfully'
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while booking appointment..'
        })
    }
}

//booking availabilityController...

const bookingAvailabilityController=async(req,res)=>{
    try{
        const date=moment(req.body.date,'DD-MM-YYYY').toISOString()
        const fromTime=moment(req.body.time,'HH:mm').subtract(1,'hours').toISOString()
        const toTime=moment(req.body.time,'HH:mm').add(1,'hours').toISOString()
        const hospitalId=req.body.hospitalId
        const appointments=await appointmentModel.find({hospitalId,
            date,
            time:{
                $gte:fromTime, $lte:toTime
            }
        })

        if(appointments.length > 0){
            return res.status(200).send({
                message:'Appointment not Available at this time',
                success:true
            })
        }
        else{
            return res.status(200).send({
                success:true,
                message:'Appointments Available'
            })
        }

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in booking'
        })
    }
}

const userAppointmentsController=async(req,res)=>{
    try{
        const appointments=await appointmentModel.find({userId:req.body.userId})
        res.status(200).send({
            success:true,
            message:'User Appointments fetch successfully',
            data:appointments
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in User Appointments'
        })
    }
}

module.exports={loginController,registerController,authController,applyHospitalController,getAllNotificationController,deleteAllNotificationController,getAllHosController,bookAppointmentController,bookingAvailabilityController,userAppointmentsController}