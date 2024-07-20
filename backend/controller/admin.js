import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import {validationResult} from 'express-validator'
import {SuperAdmin} from '../models/super_admin.model.js'

// Super Admin Creation
export const superAdminCreation = async(req,res)=>{
    let error = validationResult(req)
    console.log("Error validation: ", error)
    if(!error.isEmpty()){
        if(error.errors[0].path==="username"){
            return res.status(400).send({status:false, message:"Username atleast 4 character long"})
        }
        else if(error.errors[0].path==="password"){
            return res.status(400).send({status:false, message:"Password atleast 5 character long"})
        }
        else{
            return res.status(400).send({status:false, message:"Provide valid emial id"})
        }
    }
    else{
        try{
            let email=req.body.email
            let password=req.body.password
            let username=req.body.username
            let adminExist= await SuperAdmin.findOne({email})
            if(adminExist){
                return res.status(400).send({status:false, message:"Admin already exist"})
            }
            else{
                let salt = await bcrypt.genSalt(7)
                let hashedPassword = await bcrypt.hash(password, salt)
                let newAdmin = await new SuperAdmin({
                    username:username,
                    email:email,
                    password:hashedPassword
                })

                let adminCreated= await newAdmin.save()
                return res.status(200).send({status:true, message:"Super Admin Created Successfully ", adminData:{adminId:adminCreated._id.valueOf(), admin_username:adminCreated.username}})
            }
        }
        catch(error){
            console.log("Error occured at admin_creation: ", error)
            return res.status(500).send({status:false, message:"Internal Server Error"})
        }
    }
};

// Super Admin Login
export const superAdminLogin= async(req, res)=>{
    let error = validationResult(req)
    console.log("Error validation: ", error)
    if(!error.isEmpty()){
        if(error.errors[0].path==="password"){
            return res.status(400).send({status:false, message:"Wrong Password"})
        }
        else{
            return res.status(400).send({status:false, message:"Provide valid email id"})
        }
    }
    else{
        try{
            let email=req.body.email
            let password=req.body.password
            let adminData= await SuperAdmin.findOne({email})
            if(!adminData){
                return res.status(400).send({status:false, message:"Admin Don't Exist"})
            }
            else{
                let comparePassword = await bcrypt.compare(password, adminData.password)
                if(comparePassword){
                    const adminJwt={
                        data:{
                            adminId:adminData._id.valueOf(),
                            rolde:adminData.role
                        }
                    }
                    const jwtSecret=process.env.JWT_SECRET
                    const JWTTOKEN= jwt.sign(adminJwt, jwtSecret)
                    return res.status(200).send({status:true, message:"Admin logged Successfully", jwtToken:JWTTOKEN})
                }
                else{
                    res.status(402).send({status:false, message:"Entered Wrong Credentials"})
                }
            }
        }
        catch(error){
            console.log("Error occured at admin login: ", error)
            return res.status(500).send({status:false, message:"Internal Server Error"})
        }
    }
};