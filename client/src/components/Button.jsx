import React from "react";

const Button =({type='button', className="", value, ...props})=>{
    return (
        <button type={type} className={`mt-6 transition transition-all block py-3 px-4 text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg ${className}`} {...props}>
        {value}
        </button>
    )
};

export default Button;