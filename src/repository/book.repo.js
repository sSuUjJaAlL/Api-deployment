import Book from "../database/schema/book.schema.js"

async function findTitle(title){
    const checkTitle = await Book.findOne({title : title})
    return checkTitle
}


async function createTitleRepo(title,description){
    const savedResult = await Book.create({
        title : title,
        description : description
    })
    return savedResult
}
async function findAl(){
    const findAl= await Book.find({})
    return findAl


}
async function deleteon(title){
    const del= await Book.deleteOne({_id:title})
    return del;

}
async function update(id,body){
    const newdetail= await Book.updateOne({_id : id}, {...body}, {$new : true})
    return newdetail
    
}

export {
    findTitle,
    createTitleRepo,
    findAl,
    deleteon,
    update
    
}