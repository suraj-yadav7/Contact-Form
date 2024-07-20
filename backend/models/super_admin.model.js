import mongoose from "mongoose";

const ADMINSCHEMA=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'admin'
    }
})

export const SuperAdmin=mongoose.model("super_admin", ADMINSCHEMA)