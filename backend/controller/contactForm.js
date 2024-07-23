import { ContactForm } from "../models/contactForm.model.js"

// Creating new form
export const contactFormCreate = async(req, res)=>{
    try{
        const {fullName, email, phone, message} = req.body
        let newForm = await new ContactForm({
            fullname:fullName,
            email:email,
            phone:phone||"Not Provided",
            message:message
        })
        let formCreated = await newForm.save()
        return res.status(200).send({status:true, message:"Form Submitted Successfully", formData:{formId:formCreated._id.valueOf(), userName:formCreated.fullname}})
    }
    catch(error){   
        console.log("Error occured at form creation: ", error)
        return res.status(500).send({status:false, message:"Internal server error"})
    }
};

// Fetching all forms form collections
export const getAllContactForms=async(req, res)=>{
    try{
        let allForms = await ContactForm.find({}).limit(20)
        if(allForms.length>0){
            return res.status(200).send({status:true, message:"Fetched all user forms", formsData:allForms})
        }
        else{
            return res.status(200).send({status:true, message:"NO USER_FORM, Stack Empty"})
        }
    }
    catch(error){
        console.log("Error occured at form fetching: ", error)
        return res.status(500).send({status:false, message:"Internal server error"})
    }
};

//Delete single form 
export const contactFormDelete = async(req, res)=>{
    try{
        const {formId} = req.body
        let formExist = await ContactForm.findById(formId)
        if(formExist){
            let id = formExist._id.valueOf()
            let deletedForm = await ContactForm.findByIdAndDelete(id)
            return res.status(200).send({status:true, message:"UserForm Deleted", deleteData:{formId:deletedForm._id, userName:deletedForm.fullname}})
        }
        else{
            return res.status(404).send({status:false, message:"Form Id not found in DB"})
        }
    }
    catch(error){
        console.log("Error occured at form deletion: ", error)
        return  res.status(500).send({status:false, message:"Internal server error"})
    }
};