import express from 'express'
import dotenv from 'dotenv'
import colors from "colors"
import cors from 'cors'
import connectDB from './db.js'
import morgan from 'morgan'

const app = express()
dotenv.config()
connectDB()
app.get("/", (req, res)=>{
    res.send("<h1>User Contact Form </h1>")
})

const port = process.env.PORT
app.listen(port || 4000,()=>{
    console.log(`Server is running at Port: ${port}`.bgCyan.white)
})

app.use(express.json())
app.use(morgan('dev'))
const corsOption={
    origin:process.env.CLIENT_URL,
    method:['GET',"POST", "PUT","DELETE"],
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOption));