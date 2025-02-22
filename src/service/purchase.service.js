import { getAllpurchase, purchaseQuery } from "../repository/purchase.repo.js";

async function purchaseBookService(purchasename,bookid){
    const callfunction = await purchaseQuery(purchasename,bookid)
    return callfunction

}
async function getAll(){
    const getName= await getAllpurchase()
    return getName
}
export {
    purchaseBookService,
    getAll
}