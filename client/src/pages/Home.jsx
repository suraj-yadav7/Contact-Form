import React from 'react'
import ContactForm from "../components/ContactForm"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className='bg-gray-100 h-screen'>
        <nav className='bg-indigo-400 py-1 text-white w-full'>
            <ul className='flex justify-between items-center '> 
              <li className='pl-8 font-bold text-xl'>MRSOFT</li>
              <Link to='/login'><li className='pr-6 hover:cursor-pointer hover:text-gray-600'>AdminLogin</li></Link>
            </ul>
        </nav>  
        <ContactForm />
      </div>
    </>
  )
}

export default Home;