import mongoose from "mongoose";


async function connectMongoose(){
    const connect = await mongoose.connect('mongodb://localhost:27017')
    return connect
}


export {
    connectMongoose
}