import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true,'User name is Required']
    },

    email : {
        type : String,
        required : [true,'Email is Required']
    },

    password : {
        type : String,
        required : [true,'Password is Required']
    },
})

const User = mongoose.model('User',userSchema)
export default User