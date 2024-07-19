import express from 'express'
import { adminLogin, adminSignup } from '../controller/admin.js';

const adminRouter=express.Router()

adminRouter.post('/signup', adminSignup)
adminRouter.get('/login', adminLogin)

export default adminRouter;