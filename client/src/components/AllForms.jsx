import React, {useState,useEffect} from "react";
import axios from "axios";
import Pagination from "./Pagination";

//Child: Single form data component
function FormComp({data}){
    return (
        <>
            <div className="w-72 h-56 border-2 rounded-lg shadow-md border-indigo-400 bg-white" key={data._id}>
                <div className="px-2 pl-4 py-8">
                    <ul className="flex flex-col gap-2">
                        <li className="capitalize">FullName: {data.fullname}</li>
                        <li>Email : {data.email}</li>
                        <li>Phone no: {data.phone}</li>
                        <li>Message: {data.message}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

// Parent: All Forms container
const AllForms=()=>{
    const [formData, setFormData] = useState("")
    const [loading, setLoading] =useState(true)
    const base_url = import.meta.env.VITE_API_GATEWAY_URL
    // fetching all forms
    const getAllForms=async()=>{
        try{
        let response = await axios.get(`${base_url}/api/form-getAll`)
        if(response){
            const {data}=response
            setFormData(data.formsData)
            setLoading(false)
            }
        }
        catch(err){
            console.log("error while fetching all forms: ", err)
        }
    };

    // Pagination for formlist 
    const [currentPage, setCurrentPage] = useState(1)
    let itemsPerPage=8
    const startIndex = (currentPage-1)*itemsPerPage
    const endIndex = startIndex+itemsPerPage
    const onPageChange= (page)=>{
        setCurrentPage(page)
    }
    const sliceFormList = formData.slice(startIndex, endIndex)

    useEffect(()=>{
        getAllForms()
    },[]);
    return (
        <>
            {
                !loading ?
                <div className="flex flex-wrap justify-center items-center flex-col h-screen ">
            <div className="w-4/5  h-4/5  ">
            <div className="flex flex-wrap gap-4 gap-y-8 justify-center items-center">
                {
                    formData && sliceFormList.map((elem)=>(
                        <FormComp key={elem._id} data={elem}/>
                    ))
                }
                </div>
                <div>
                    {
                        sliceFormList && sliceFormList.length>0 ? <Pagination dataLen={formData.length} currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={onPageChange}/>:''
                    }
                    
                    </div>
                </div>
            </div>
            // load spinner
                :<div className='spinner'>
                    <article></article>
                    <p className='text-black opacity-75 mt-5'>Data is loading.... Please Wait....!</p>
                </div>
            }
            </>
        )
};

export default AllForms;