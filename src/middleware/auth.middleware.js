import jwt from 'jsonwebtoken'

const shubham = {

}

const request = {

}

shubham.sujal = 'a'



async function checkAuthToken(req,res,next){

    const token = req.headers.authorization
    if(!token){
        throw new Error('You are not Authorized')
    }else{
         const secretkey = 'sujal'
         const decodedPayload = jwt.verify(token,secretkey)
        req.user = decodedPayload
        next()
    }


}

export {
    checkAuthToken
}