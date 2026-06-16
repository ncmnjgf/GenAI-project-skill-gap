//authentication api are presnt in this file
//code is not important 
//the important thing is flow we need to understant the flow of applications
const {Router} = require('express')
const authController = require("../controllers/auth.controller")
const authRouter  = Router()
const authMiddleware = require("../middlewares/auth.middleware")

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

/**
 * @route GET/api/auth/logout
 * @description clear token from user and add the token in blacklist
 * @access public
 */
authRouter.get("/logout",authController.LogoutUserController)

/**
 * @route GET/api/auth/get-me
 * we will get current logged in user detailes
 * @access private
 */
authRouter.get("/get-me",authMiddleware.authUser)


module.exports = authRouter

//1houe 10 min