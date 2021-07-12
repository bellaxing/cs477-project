const express = require('express');
const router = express.Router();
const cartController=require('../controllers/cartController')
router.get('/',cartController.getAllCart)
router.post('/',cartController.save)
router.delete('/remove/:username',cartController.delete)

router.delete('/:id',cartController.delete)

module.exports = router;