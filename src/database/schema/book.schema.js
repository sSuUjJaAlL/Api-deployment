import mongoose from "mongoose"

const bookSchema =  new mongoose.Schema({
    title : {
        type : String,
    },
    description : {
        type : String
    }
})

const Book = mongoose.model('Book',bookSchema)
export default Book