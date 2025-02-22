import { getAll, purchaseBookService } from "../service/purchase.service.js"

async function purchaseBook(req,res){
    try{
        const id= req.query.bookid
        const purchaseName= req.query.name
        const callf= await purchaseBookService(purchaseName,id)

        return res.status(201).send(callf)




    }
    catch(err){
        console.log(err)
    }

}
async function purchaseName(req,res){
    try{
        const ver= await getAll();
        return res.status(201).send(ver);
        


    }
    catch(err){
        console.log(err)
    }
}

export{
    purchaseBook,
    purchaseName
}