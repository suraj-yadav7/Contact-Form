import {body} from 'express-validator'

export const adminSignupValidation = [
        body("username").isLength({min:4}),
        body("email").isEmail(),
        body("password").isLength({min:5})
    ]

export const adminLoginValidation =[
        body("email").isEmail(),
        body("password").isLength({min:5})
]