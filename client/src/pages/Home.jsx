import React, { useEffect, useState } from 'react'
import ContactForm from "../components/ContactForm"
import { Link } from 'react-router-dom'
import AllForms from '../components/AllForms'
const Home = () => {
  const [role, setRole]=useState('')

useEffect(()=>{
  const adminItem=localStorage.getItem("adminData")
  if(adminItem){
    const data=JSON.parse(adminItem)
    setRole(data.role)
  }
},[]);

  return (
    <>
      <div className='bg-gray-100 h-screen'>
        <nav className='bg-indigo-400 py-1 text-white w-full'>
            <ul className='flex justify-between items-center '> 
              <Link to="/"><li className='pl-8 font-bold text-xl hover:cursor-pointer'>MRSOFT</li></Link>
              {
                role&& role==='admin'?
              <Link to='/login'><li className='pr-6 hover:cursor-pointer hover:text-gray-600' onClick={()=>{localStorage.clear()}}>Logout</li></Link>
              :<Link to='/login'><li className='pr-6 hover:cursor-pointer hover:text-gray-600'>AdminLogin</li></Link>
              }
            </ul>
        </nav>  
        {
          role&& role==='admin'? <AllForms/>:
        <ContactForm />
        }
      </div>
    </>
  )
}

export default Home;