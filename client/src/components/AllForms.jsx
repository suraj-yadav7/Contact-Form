import React from "react";

function FormComp(){
    return (
        <>
            <div className="w-72 h-56 border rounded-lg shadow-md border-indigo-400">
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
    let arr=[1,2,3,4,5]
    return (
        <>
            <div className="flex gap-4">
                {
                    arr.map((elem)=>(
                        <FormComp/>
                    ))
                }
            </div>
        </>

    )
};

export default AllForms;