const express = require('express');
const { getAllUserController, getAllHospitalsController,changeAccountStatusController } = require('../controllers/adminCtrl');
const authMiddleware = require('../middlewares/authMiddleware');


const router=express.Router()

//GET method
router.get('/getAllUsers',authMiddleware,getAllUserController)

//GET method
router.get('/getAllHospitals',authMiddleware,getAllHospitalsController)


router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)
module.exports=router