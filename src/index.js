import express from 'express'
import serverRouter from './router/server.route.js'
import { connectMongoose } from './database/connect.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use(serverRouter)


connectMongoose().then(() => {
    console.log('Database Connected Subodh')
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
}).catch((err) => {
    console.log('Database Does not Connected')
})