import User from "../database/schema/user.schema.js"
import { loginService, signUpservice } from "../service/user.service.js"

async function signupController (req,res) {
    try{
        const content = req.body
        const apiResponse = await signUpservice(content)
        return res.status(201).json({
            apiResponse
        })
    }catch(err){
        console.log(err)
    }
}


async function loginController (req,res) {
    try{
        const content = req.body
        const apiResponse = await loginService(content)
        return res.status(201).json({
            apiResponse
        })
    }catch(err){
        console.log(err)
    }
}

async function getUserProfile (req,res) {
    try{
        console.log(req.user)
        const content = await User.findOne({_id : req.user.userId})
        return res.status(201).json({
            data : content
        })
    }catch(err){
        console.log(err)
    }
}


export {
    signupController,
    loginController,
    getUserProfile
}