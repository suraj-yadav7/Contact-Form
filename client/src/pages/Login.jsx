import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login=()=>{
    return (
        <>
            <div>
                <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
                    <div className=" border-t-4 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
                    <h1 className="font-bold text-center block text-2xl mb-4">Admin Login</h1>
                    <form >
                    <Input type="email" id="email" name="email" label="Email Address" placeholder="me@example.com" autofocus={true} />
                    <Input type="password" id="password" name="password" label="Password" placeholder="••••••••••"  />
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