import React from 'react'
import Input from './Input'
import Button from './Button'

const ContactForm= ()=>{
    return(
        <>
            <div className='flex justify-center items-center mt-8'>
            <div className=" border-t-4 rounded-sm border-indigo-600 bg-white py-8 px-10 shadow-2xl w-2/5">
                    <h1 className="font-bold text-center block text-2xl mb-4">Contact Us Form</h1>
                    <form>
                    <Input type="text" id="name" name="fullname" label="Full Name" placeholder="your name here" autofocus={true}/>
                    <Input type="email" id="email" name="email" label="Email Address" placeholder="me@example.com" autofocus={true}/>
                    <Input type="number" id="phone" name="phone" label="Mobile No" placeholder="+91" autofocus={true}/>
                    <label className='text-gray-800 block mt-3'>
                    Message
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="rounded px-4 py-3 w-full h-32 mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 px-3 py-3 text-base focus:outline-none focus:ring focus:ring-indigo-100  shadow "
                        required/>
                    </label>
                    <div className='flex justify-center items-center'>
                        <Button className='w-80' value="Submit" />
                    </div>
                    </form>
                    </div>
            </div>
        </>
    )
};

export default ContactForm;