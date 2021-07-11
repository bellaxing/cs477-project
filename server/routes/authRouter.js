const express = require("express")
const userController = require("../controller/userController")
const router = express.Router();



router.post('/login', userController.login) 
router.post('/signup', userController.saveMember)
router.post('/updateInfo/id/:id/:userName', userController.authorize, userController.authorizeGuest, userController.updateInfo )
 // to check in 
router.use(userController.authorize)  // after login in to check if authorize to use certain fun(e.g delete, update)

module.exports = router;