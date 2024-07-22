import React, {useState,useEffect} from "react";
import axios from "axios";

function FormComp(){
    return (
        <>
            <div className="w-72 h-56 border-2 rounded-lg shadow-md border-indigo-400">
                <div className="px-2 pl-4 py-8">
                    <ul className="flex flex-col gap-2">
                        <li>FullName: username</li>
                        <li>Email : surajyadav3@gmail.com</li>
                        <li>Phone no: +9328u327824</li>
                        <li>Message: THis is firsd sdfds sdfdsf ad asdsa</li>
                    </ul>
                </div>
            </div>
        </>
    )
}


const AllForms=()=>{
    const [formData, setFormData] = useState("")
    const base_url = import.meta.env.VITE_API_GATEWAY_URL

    const getAllForms=async()=>{
        try{
        let response = await axios.get(`${base_url}/api/form-getAll`)
        console.log("all form: ", response)
        if(response){
            const {data}=response
            setFormData(data.formsData)
            }
        }
        catch(err){
            console.log("error while fetching all forms: ", err)
        }
    };

    useEffect(()=>{
        getAllForms()
    },[]);

    let arr=[1,2,3,4,5,6,7,8]

    return (
        <>
            <div className="flex flex-wrap justify-center items-center flex-col mt-10 ">
            <div className="w-4/5  h-4/5 flex flex-wrap gap-5 justify-center items-center">
                {
                    arr.map((elem)=>(
                        <FormComp/>
                    ))
                }
                </div>
                <div className="h-10 flex justify-center items-center gap-4 mt-8">
                <button className="p-1 px-6 border-indigo-300 border-2 rounded-lg hover:bg-indigo-300 hover:shadow-xl hover:text-white">Prev</button>
                <button className="p-1 px-6 border-indigo-300 border-2 rounded-lg  hover:bg-indigo-300 hover:shadow-xl hover:text-white">Next</button>
                </div>
            </div>
        </>

    )
};

export default AllForms;