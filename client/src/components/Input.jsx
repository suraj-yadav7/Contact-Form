import React from "react";

const Input = ({label, name,id, autofocus, placeholder, type='text', className='', ...props})=>{
    return (
    <label className="text-gray-800 block  mt-3">{label}
        <input
            autoFocus={autofocus}
            type={type} 
            id={id} 
            name={name} 
            placeholder={placeholder}
            {...props}
            className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100" />
        </label>
    )
}

export default Input;