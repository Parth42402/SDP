const mongoose=require('mongoose')

const appointmentSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    hospitalId:{
        type:String,
        required:true
    },
    hospitalInfo:{
        type:String,
        required:true
    },
    userInfo:{
        type:String,
        required:true
    },
    // child_name:{
    //     type:String,
    //     required:true
    // },
    // age:{
    //     type:Number,
    //     required:true
    // },
    // vaccine:{
    //     type:String,
    //     required:true
    // },

    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:'pending'
    },
    time:{
        type:String,
        required:true
    }
},{timestamps:true})

const appointmentModel=mongoose.model('appointmnet',appointmentSchema)

module.exports=appointmentModel