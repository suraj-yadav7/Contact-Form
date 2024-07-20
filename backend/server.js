import express from 'express'
import dotenv from 'dotenv'
import colors from "colors"
import cors from 'cors'
import connectDB from './db.js'
import morgan from 'morgan'
import adminRouter from './routes/adminRoute.js'

const app = express()
dotenv.config()
connectDB()

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
};

app.use((req,res,next)=>{
    console.log("req url: ", req.url)
    next()
})

app.use(cors(corsOption));
app.use("/admin", adminRouter)

app.get("/", (req, res)=>{
    res.send("<h1>User Contact Forms </h1>")
})