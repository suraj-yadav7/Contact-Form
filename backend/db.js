import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const uri=process.env.MONGO_URI
const connectDB=async()=>{
    try{
        let connectionInstance=await mongoose.connect(uri,{
            dbName:'contactForm'
        })
        console.log(`Moongodb Connected at ${connectionInstance.connection.host}`.bgGreen.white)
    }
    catch(error){
        console.log(`Error while connecting MongoDB: ${error}`.bgRed.white)
    }
}
export default connectDB;