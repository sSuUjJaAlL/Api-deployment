import { findUser, getEmail,getUsername, saveData } from "../repository/user.repo.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { findAl } from "../repository/book.repo.js"

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

    const accessToken = jwt.sign(payload,secretkey,{issuer : 'sujal adhikari',expiresIn : '1h'})
    const refreshToken = jwt.sign(payload,secretkey,{issuer : 'sujal adhikari',expiresIn : '1d'})
    return {
        accessToken,refreshToken
    }
}
    
    



async function getUserProfile(){

}









async function refreshtokenService(s) {
   
   const secretKey="sujal"
    const decodedPayload = jwt.verify(s, secretKey);
    const userId = decodedPayload.userId;
    const shubham = await findUser(userId);
    
    const payload = {
      userId: shubham._id,
      username: shubham.username,
      useremail: shubham.email,
    };
    const accessToken = jwt.sign(payload, secretKey,{issuer : 'sujal adhikari',expiresIn : '1h'})
    return { accessToken };
}
export {
    signUpservice,
    loginService,
    refreshtokenService
}