import Purchase from "../database/schema/purchase.schema.js"


async function purchaseQuery(purchasename,id){
    const updateResult= await Purchase.create({
        purchaseby:purchasename,
        book:id
    })
    return updateResult

}
async function getAllpurchase(){
    const gett= await Purchase.find({}).populate("book")
    return gett

}

export {
    purchaseQuery,
    getAllpurchase
}
