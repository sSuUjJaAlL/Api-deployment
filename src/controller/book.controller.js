import Book from "../database/schema/book.schema.js"
import { createBookService, findBookservice ,  deleteBookservice,updateBookService} from "../service/book.service.js"



async function createBook(req,res){
    try{
        const content = req.body
        const {title , description} = content
        const response = await createBookService(title,description,res)
        return res.status(201).json({
            data : response
        })
       
    }catch(err){
        console.log(err)
    } 
}
async function showBook(req,res){
    try{
        const some=await findBookservice();
        
        return res.status(201).json(some);


    }
    catch(err){
        console.log(err)
    }
}
async function deleteBook(req,res){
    try {
        const con= req.params.bookid
        const servicecall= await deleteBookservice(con)
        return res.status(201).send(servicecall)



    }
    catch(err){
        console.log(err);
    }
}
async function updateBook(req,res){
    try{
        const con= req.params.bookid
        const body= req.body
        const servicecal= await updateBookService(con,body)
        return res.status(201).send(servicecal)

    }
    catch(err){
        console.log(err)
    }
}


export {
    createBook,
    showBook,
    deleteBook,
    updateBook

}