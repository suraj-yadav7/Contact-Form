import mongoose from "mongoose";

const FORMSCHEMA= new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        default:"Not Provided"
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

export const ContactForm=mongoose.model("contact_form", FORMSCHEMA)
