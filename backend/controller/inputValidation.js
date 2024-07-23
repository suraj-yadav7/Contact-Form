import {body} from 'express-validator'
// validating signup input values
export const adminSignupValidation = [
        body("username").isLength({min:4}),
        body("email").isEmail(),
        body("password").isLength({min:5})
]

// validating login input values
export const adminLoginValidation =[
        body("email").isEmail(),
        body("password").isLength({min:5})
]