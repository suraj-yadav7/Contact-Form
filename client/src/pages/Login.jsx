import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login=()=>{
    const [loginData, setLoginData] = useState({email:"", password:""})
    const [loading, setLoading] = useState(false)
    const naviagte=useNavigate()
    const base_url = import.meta.env.VITE_API_GATEWAY_URL
    
    //handle admin input changes
    const handleChange=(e)=>{
        const {value, name} = e.target
        setLoginData((prev)=> ({...prev, [name]:value }))
    };

    //handle login submission
    const handleSubmit=(e)=>{
        e.preventDefault()
        userLogin()
    }

    // Verifiying user credentials
    const userLogin=async()=>{
        try{
            setLoading(true)
            let response = await axios.post(`${base_url}/api/login`, loginData)
            if(response.data){
                setLoading(false)
                let adminItem=JSON.stringify({
                    "loginToken": response.data.jwtToken, 
                    "role":response.data.role
                })
                localStorage.setItem("adminData",adminItem)
                toast.success(response.data.message)
                setTimeout(()=>{
                    naviagte("/")
                },1200)
            }
        }
        catch(error){
            setLoading(false)
            console.log("Error while login: ", error)
            const {data}=error.response
            toast.error(data.message)
        }
    };

    return (
        <>
            <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
                <div>
                {loading? <div className="text-center py-1 font-semibold"><p>Please wait for while...  30-60sec</p></div>:""}
                    <div className=" border-t-4 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
                    <h1 className="font-bold text-center block text-2xl mb-4">Admin Login</h1>
                    <form onSubmit={handleSubmit}>
                    <Input type="email" id="email" name="email" value={loginData.email} label="Email Address" onChange={handleChange} placeholder="me@example.com"  />
                    <Input type="password" id="password" name="password" value={loginData.password} label="Password" onChange={handleChange} placeholder="••••••••••"  />
                    <p className="mt-4">Just want to submit contact us <Link to='/'><span className="text-indigo-600 underline hover:cursor-pointer"> form </span></Link></p>
                    <Button type="submit" value="Login" />
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;