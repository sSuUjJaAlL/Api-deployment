import mongoose from "mongoose"

const purchaseSchema= new mongoose.Schema({
    purchaseby:{
        type:String,

    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
        
    },

})
const Purchase =mongoose.model("Purchase",purchaseSchema)
export default Purchase

