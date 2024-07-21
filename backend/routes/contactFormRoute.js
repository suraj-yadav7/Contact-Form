import express from 'express'
import { contactFormCreate, getAllContactForms, contactFormDelete } from '../controller/contactForm.js'
import { authorization } from '../middlewares/authorization.js'

const contactRouter = express.Router()

contactRouter.post("/create", contactFormCreate)
contactRouter.get("/getAll", getAllContactForms)
contactRouter.delete("/delete", authorization, contactFormDelete)

export default contactRouter;