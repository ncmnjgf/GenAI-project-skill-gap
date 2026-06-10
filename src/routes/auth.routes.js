//authentication api are presnt in this file
//code is not important 
//the important thing is flow we need to understant the flow of applications
const {Router} = require('express')
const authController = require("../controllers/auth.controller")
const authRouter  = Router()


/**
 * @route POST /api/aut/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register",authController.registerUserController)

/**
 * @route POST/api/auth/login
 * @description login user with email and password
 * @access Public
 */
authRouter.post("/login",authController.LoginUserController)

module.exports = authRouter