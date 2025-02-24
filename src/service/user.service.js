import { getEmail,getUsername, saveData } from "../repository/user.repo.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function signUpservice(content){

    const {email , password , username } = content

    const emailExists = await getEmail(email)
    const usernameExistts = await getUsername(username)

    if(emailExists || usernameExistts){
        throw new Error(`Email is already on the system`)
    }


    const genSalt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,genSalt)

    const payload = {
        username,
        password : hashPassword,
        email
    }

    const savedData = await saveData(payload)
    return savedData
    
}


async function loginService(content){
    const {email,password} = content

    const emailExists = await getEmail(email)

    console.log(emailExists)

    if(!emailExists){
        throw new Error('Email does not Exists')
    }
    const dbpassword = emailExists.password
    const matchpassword = await bcrypt.compare(password,dbpassword)

    if(!matchpassword){
        throw new Error('Password is wrong')
    }

    const payload = {
        userId : emailExists._id,
        username : emailExists.username,
        useremail : emailExists.email
    }

    const secretkey = 'sujal'
    
    if('password' in emailExists){
        delete emailExists['password']
    }

    const accessToken = jwt.sign(payload,secretkey,{issuer : 'sujal adhikari',expiresIn : '1h'})
    return {
        accessToken
    }
}


async function getUserProfile(){

}

export {
    signUpservice,
    loginService
}