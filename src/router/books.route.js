import { Router } from "express";
import { createBook,showBook,deleteBook,updateBook } from "../controller/book.controller.js";

const bookRouter = Router()


bookRouter.post('/book',createBook)
bookRouter.get('/bookname', showBook)
bookRouter.delete('/delete/:bookid', deleteBook)
bookRouter.patch('/update/:bookid',updateBook)


export default bookRouter