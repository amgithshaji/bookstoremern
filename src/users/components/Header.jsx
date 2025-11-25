import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function Header() {

  const[listStatus,setListStatus] = useState(false)

  const menuBtnClick=()=>{
    setListStatus(!listStatus)
  }

  
  return (
    <>
  {/* upper part title &login */}


<div className='grid grid-cols-3 p-2' >
      {/* logo with title */}
      <div className='flex items-center' >
<img width={'70px'} height={'70px'} src="https://thumbs.dreamstime.com/b/book-icon-vector-design-library-symbol-web-graphic-jpg-ai-app-logo-object-flat-image-sign-eps-art-picture-stock-79808709.jpg" alt="logo" />
<h1 className='text-2x1 font-bold ms-1 md:hidden' >BOOKSTORE</h1>
      </div>
      {/* title */}
      <div className='md:flex justify-center items-center hidden' >
        <h1 className='text-3xl font-bold ' >BOOK STORE</h1>
      </div>
      {/* login */}
        <div className='md:flex justify-end items-center hidden' >
          {/* insta,twitter,facebook */}
          <FaInstagram className='text-2xl' />
          <FaFacebook className='mx-2 text-2xl' />
          <FaXTwitter className='text-2xl' />
          <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center ' >
          <FaUser className='me-1'/>
          
          Login</Link>
      </div>

  
</div>   
  {/*header  lower part - links  */}
  <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center' >
    {/* div menu bar icon with login  */}
    <div className="flex justify-between items-center text-2xl md:hidden">
      {/* menu bar */}
      <button onClick={menuBtnClick} > <FaBars/> </button>
      {/* login btn */}
  <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center ' >
   <FaUser className='me-1'/>Login</Link>
    </div>
    {/* ul-links */}
    <ul className={listStatus?" flex flex-col ":"md:flex justify-center items-center hidden "}>
      <li> <Link to={'/'} className='md:mx-4' >HOME</Link> </li>
       <li> <Link to={'/books'} className='md:mx-4 my-3 md:my-0' >BOOKS</Link> </li>
      <li> <Link to={'/contact'} className='md:mx-4' >CONTACT</Link> </li>
    </ul>
  </nav>

 </>
  )
}

export default Header