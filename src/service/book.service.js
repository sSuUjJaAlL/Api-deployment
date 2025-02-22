import Book from "../database/schema/book.schema.js"
import { createBook } from "../controller/book.controller.js"
import { findTitle,createTitleRepo,findAl, deleteon,update } from "../repository/book.repo.js"

async function createBookService(title,description,res){
    const checkTitle =  await findTitle(title)

    if(checkTitle){
       return res.status(201).json({
            message : `Book is already Saved`,
            data : null
        })
    }
     const savedResult = await createTitleRepo(title,description)
     return res.status(201).json({
        message : `Book Saved`,
        data : savedResult
    })
}
async function findBookservice(){
    const findBooks= await findAl();
    return findBooks;

    

}
async function deleteBookservice(title){
    const titlee= await deleteon(title);
    return titlee;

    
}
async function updateBookService(id,body){
    const updateResult= await update(id,body);
    return updateResult
}


export {
    createBookService,
    findBookservice,
    deleteBookservice,
    updateBookService
}