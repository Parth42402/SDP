const express=require('express');
const { getHospitalInfoController, updateProfileController, getHosByIdController, hospitalAppointmentsController, updateStatusController } = require('../controllers/hospitalCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

const router=express.Router()

//POST single hospital info
router.post('/getHospitalInfo',authMiddleware,getHospitalInfoController)


//POST update profile
router.post('/updateProfile',authMiddleware,updateProfileController)


//post get Single hos Info
router.post('/getHospitalById',authMiddleware,getHosByIdController)


//get Appointments
router.get('/hospital-appointments',authMiddleware,hospitalAppointmentsController)

//post update Status
router.post('/update-status',authMiddleware,updateStatusController)
module.exports=router