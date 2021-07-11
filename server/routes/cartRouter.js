const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController')
const userController = require('../controller/userController')
const cartController = require('../controller/cartController')

router.get('/carts/:username', userController.authorizeUsername, cartController.listItemCart)
router.post('/carts/:username', userController.authorizeUsername, cartController.addItemInCart)
router.delete('/carts/:username/:pid', userController.authorizeUsername, cartController.removeCartItem)


module.exports= router;

