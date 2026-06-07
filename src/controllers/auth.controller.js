const userModel = require("../models/user.model")
const bcrypt = require ("bcryptjs")
const jwt = require("jsonwebtoken")
//Here we are Writing the Logic

/**
 * 
 * @name registerUserController
 * @description Register a new User,expect username ,eamil
 * @access Public 
 */

async function registerUserController(res,req) {
   
 const {username,email,password} = req.body
/**user must enter usename email and passwords
 * is not return the message
 */
 if(!username || !email || !password){
    return res.status(400).json({
        message:"Please provide username . email and password"
    })
 }
/**checking if user exist , if yes return res.send 400 if also return  */
 const isUserAIreadyExists = await userModel.modelName.findOne({
    $or:[{username},{email}]
 })

 if(isUserAIreadyExists) {
    /**in future isUsernameExists .username means email can exists */
    return res.status(400).json({
        message:"Account already exists with this email address or username"
    })
 }
 /**we are doing hashin on passwors
  * and we are creating a token
  */
 const hash = await bcrypt.hash(password,10);

 const user = await userModel.create({
    username,
    email,
    password:hash
 })
/**to get the jwt secreat key we have a website name is jwt secreate key  */
 const token = jwt.sign(
    {id : user._id,username:user.username},
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
 )
 
 res.cookie("token",token)

 res.status(201);
 
 

}

module.exports = {

    registerUserController
}