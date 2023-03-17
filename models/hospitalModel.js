const mongoose=require('mongoose')

const hospitalSchema=new mongoose.Schema({
    userId:{
        type:String
    },
    hos_name:{
        type:String,
        required:[true,'hospital name is required']
    },
    phone:{
        type:String,
        required:[true,'Phone_no is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true,'address is required']
    },
    feesPerVaccine:{
        type:Number,
        required:[true,'fee is required']
    },
    status:{
        type:String,
        default:'pending'
    },
    timings:{
        type:Object,
        required:[true,'timeing is required']
    }

},{timestamps:true})

const hospitalModel=mongoose.model('hospital',hospitalSchema)
module.exports=hospitalModel