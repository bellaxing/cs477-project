const express = require('express');
const router = express.Router();
const orderHistoryController=require('../controllers/orderHistController')
router.get('/:username',orderHistoryController.getByUserName)
router.post('/',orderHistoryController.save)
router.delete('/:username',orderHistoryController.delete)
module.exports = router;