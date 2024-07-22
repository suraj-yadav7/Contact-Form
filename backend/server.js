import express from 'express'
import dotenv from 'dotenv'
import colors from "colors"
import cors from 'cors'
import connectDB from './db.js'
import morgan from 'morgan'
import adminRouter from './routes/adminRoute.js'
import contactRouter from './routes/contactFormRoute.js'

const app = express()
dotenv.config()
connectDB()

const port = process.env.PORT
const api_url=process.env.API_GATEWAY_URL
const client_url=process.env.CLIENT_URL
app.listen(port || 4000,()=>{
    console.log(`Server is running at Port: ${port}`.bgCyan.white)
})

app.use(express.json())
app.use(morgan('dev'))
console.log("api: ", api_url)
const corsOption={
    origin:[api_url],
    method:['GET',"POST", "PUT","DELETE"],
    credentials:true,
    optionSuccessStatus:200
};


app.use(cors(corsOption));
app.use("/admin", adminRouter)
app.use("/form", contactRouter)

app.get("/", (req, res)=>{
    res.send("<h1>User Contact Forms </h1>")
})