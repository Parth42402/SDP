 const express=require('express');
const { loginController, authController,applyHospitalController, getAllHosController, bookAppointmentController, bookingAvailabilityController, userAppointmentsController } = require('../controllers/userCtrl');
const { registerController,getAllNotificationController,deleteAllNotificationController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');


 //router object
 const router=express.Router();

 //routes
 //login || POST
 router.post('/login',loginController)

 //regiater || POST
 router.post('/register',registerController)

//Auth || POST
router.post('/getUserData',authMiddleware,authController)


//Apply Hospital || POST
router.post('/apply-hospital',authMiddleware,applyHospitalController)
 module.exports=router

 //Notification hospital || POST
router.post('/get-all-notification',authMiddleware,getAllNotificationController)


router.post('/delete-all-notification',authMiddleware,deleteAllNotificationController)

//Get All Hospital

router.get('/getAllHospitals',authMiddleware,getAllHosController)


//Book Appointmnet
router.post('/book-appointment',authMiddleware,bookAppointmentController)

//Booking Availability
router.post('/booking-availability',authMiddleware,bookingAvailabilityController)

//Appointment List
router.get('/user-appointments',authMiddleware,userAppointmentsController)
module.exports=router