import React, { useEffect, useState } from 'react'
import Input from './Input'
import Button from './Button'
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactForm= ()=>{
    const [formData, setFormData]=useState({
        fullName:'',
        email:'',
        phone:'',
        message:''
    })

    const base_url=import.meta.env.VITE_API_GATEWAY_URL

    // Handling Contactform input changes
    const handleChange=(e)=>{
        const {name, value} = e.target
        setFormData((prev)=>({...prev, [name]:value}))
    }

    // Handle Form submission
    const handleSubmit=(e)=>{
        e.preventDefault()
        formSubmission()
    }

    // Actual function of formsubmission
    const formSubmission=async()=>{
        try{
            let response = await axios.post(`${base_url}/api/form-create`, formData)
            console.log("response: ", response)
            if(response.data){
                toast.success(response.data.message)
                setFormData({
                    fullName:'',
                    email:'',
                    phone:'',
                    message:''
                })
            }
        }
        catch(error){
            console.log("Error while form submission: ", error)
            const {data}=error.response
            toast.error(data.message)
        }
    };

    return(
        <>
            <div className='flex justify-center items-center pb-12 h-screen'>
            <div className=" border-t-4 rounded-sm border-indigo-600 bg-white py-8 px-10 shadow-2xl w-2/5">
                    <h1 className="font-bold text-center block text-2xl mb-4">Contact Us Form</h1>
                    <form onSubmit={handleSubmit}>
                    <Input type="text" id="name" name="fullName" value={formData.fullName} onChange={handleChange} label="Full Name" placeholder="your name here" required />
                    <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} label="Email Address" placeholder="me@example.com" required/>
                    <Input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} label="Mobile No" placeholder="+91" />
                    <label className='text-gray-800 block mt-3'>
                    Message
                    <textarea
                        placeholder="Your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded px-4 py-3 w-full h-32 mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 px-3 py-3 text-base focus:outline-none focus:ring focus:ring-indigo-100  shadow "
                        required/>
                    </label>
                    <div className='flex justify-center items-center'>
                        <Button type='submit' className='w-80' value="Submit" />
                    </div>
                    </form>
                    </div>
            </div>
        </>
    )
};

export default ContactForm;