import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function PaymentError() {
  return (
        <>
  <Header/>
        <div className='min-h-screen flex justify-center items-center' >
            <div className='md:grid grid-cols-2 gap-10' >
        <div>
    <h1 className='md:text-4xl text-blue-800' >oops....</h1>
    <h2 className='my-10 md:text-xl' >thank you for purchaing with bookstore..</h2>
                <Link to={'/books'} className='flex items-center bg-blue-700 p-2 w-60 text-white' >
    <FaBackward className='me-2' />  explore more books
                </Link>
           </div>

           <img src="https://cdn.dribbble.com/userupload/21684037/file/original-92974a852e9661ef581dc8f7d971bf2c.gif" alt="no img" />
            </div>


        </div>
<Footer/>
    </>
  )
}

export default PaymentError