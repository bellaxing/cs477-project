const express = require('express');
const router = express.Router();
const bankController=require('../controllers/bankController')

router.post('/placeOrder',bankController.verifyBank)

module.exports = router;