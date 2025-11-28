import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'

function Profile() {
  const [tab,setTab]= useState(1)
  return (
    <>
    <Header/>
    {/* black div */}
    <div style={{height:"200px"}} className="bg-black"></div>
    {/* profile imgage */}
    <div style={{width:"250px",height:"250px",borderRadius:"50%",marginLeft:"70px",marginTop:"-130px"}} className='bg-white p-3' >
      <img style={{width:"230px",height:"230px",borderRadius:"50%",}} src="https://mobilenetrix.com/assets/client/app/media/img/users/profile_user.jpg" alt="no img" />

    </div>
    {/* namw with edit */}
    <div className="md:flex justify-between items-center md:px-20 px-5 my-5">
      <h1 className="text-2xl font-bold flex items-center ">Username  <FaCircleCheck className='text-blue-400 ms-5' /> </h1>
          <Edit/>
    </div>
    <p className=' text-justify md:px-20 px-5 my-5'>
Lucas is a community book-lover and the driving force behind his neighborhood book club. He enjoys contemporary literary fiction, sci-fi with strong worldbuilding, and nonfiction about design and culture. He frequents author signings and likes to leave thoughtful reviews to help fellow readers. Lucas joined our store in March 2024 and currently follows recommendations in “Staff Picks” and “New Releases.” </p>
{/* tabs with content */}
<div className="md:px-40">
  {/* tabs */}
  <div className="flex justify-center items-center my-8 font-medium text-lg">
    <p onClick={()=>setTab(1)} className={tab==1?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer ':'border-gray-200 border-b p-4 cursor-pointer' }>Sell Books</p>
    <p onClick={()=>setTab(2)} className={tab==2?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer ':'border-gray-200 border-b p-4 cursor-pointer' } >Book Status</p>
    <p onClick={()=>setTab(3)} className={tab==3?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer ':'border-gray-200 border-b p-4 cursor-pointer' } >Purchse Histroy</p>
  </div>
  {/* contents */}
  {
    tab==1 &&
    <SellBook/>
}
  {
    tab==2 &&
<BookStatus/>}
  {
    tab==3 &&
    <Purchase/>
 }

</div>
    <Footer/>
    </>
  )
}

export default Profile