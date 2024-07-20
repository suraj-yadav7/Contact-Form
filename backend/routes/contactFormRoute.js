import express from 'express'
import { contactFormCreate, getAllContactForms, contactFormDelete } from '../controller/contactForm.js'

const contactRouter = express.Router()

contactRouter.post("/create", contactFormCreate)
contactRouter.get("/get", getAllContactForms)
contactRouter.delete("/delete", contactFormDelete)

export default contactRouter;