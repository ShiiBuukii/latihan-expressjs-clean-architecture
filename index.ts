import express from 'express'
import cors from 'cors'
import productRoute from './src/features/product/routes/productRoute'
import 'reflect-metadata'
import { AppDataSource } from './src/configs/data-source'
import authRoute from './src/features/authentication/routes/authRoute'

AppDataSource.initialize().catch((error)=>{
    console.log(error)
})

const app = express()
const PORT = 3000


app.use(express.json())
app.use(cors())
app.use(cors({
    methods: ["GET", "POST", "PATCH"]
}))

app.use(authRoute)
app.use(productRoute)



app.listen(PORT, ()=>{
    console.log("listenting to: ", PORT)
}) 

