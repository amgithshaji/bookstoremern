import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaPowerOff, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'


function Header() {

  const[listStatus,setListStatus] = useState(false)
  const [dp,setDp] = useState("")
  const [token,setToken] = useState("")
  const [dropDown,setDropDown] = useState(false)
  const navigate = useNavigate()


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
  const userToken = sessionStorage.getItem("token")
  setToken(userToken)
  const user = JSON.parse(sessionStorage.getItem("user"))
  setDp(user.picture)
    }
  },[token])

  const menuBtnClick=()=>{
    setListStatus(!listStatus)
  }
 
  const logout = ()=>{
    sessionStorage.clear()
    setToken("")
    setDp("")
    setDropDown(false)
    setListStatus(false)
    navigate('/')
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
          {/* login link */}
          {
            !token ?
          <Link to={'/login'} className='ms-4 border rounded p-2 hover:bg-black hover:text-white flex items-center' >
          <FaUser className='me-1'/> Login</Link>
          :
          <div className='relative inline-block text-left ms-2'>
            <button onClick={()=>setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-50' >
              <img width={'40px'} height={'40px'} style={{borderRadius:"50px"}} src={dp?dp:"https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740&q=80"} alt="no img" />
            </button>

          {
             dropDown &&
          <div className=' absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden'> 
                <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-700 flex items-center' > <FaAddressCard className='me-2' /> profile</Link>
            <button onClick={logout} className='px-4 py-2 text-sm text-gray-700 flex items-center' > <FaPowerOff className='me-2' /> logout</button>
            </div> }
          
          </div>
          }
      </div>
</div>   
  {/*header  lower part - links  */}
  <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center' >
    {/* div menu bar icon with login  */}
    <div className="flex justify-between items-center text-2xl md:hidden">
      {/* menu bar btn */}
      <button onClick={menuBtnClick} > <FaBars/> </button>
      {/* login link */}
    {
            !token ?
          <Link to={'/login'} className='ms-4 border rounded p-2 hover:bg-black hover:text-white flex items-center' >
          <FaUser className='me-1'/> Login</Link>
          :
          <div className='relative inline-block text-left ms-2'>
            <button onClick={()=>setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-50' >
                <img width={'40px'} height={'40px'} style={{borderRadius:"50px"}} src={dp?dp:"https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740&q=80"} alt="no img" />
            </button>

          {
             dropDown &&
          <div className=' absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden'> 
                <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-700 flex items-center' > <FaAddressCard className='me-2' /> profile</Link>
            <button onClick={logout} className='px-4 py-2 text-sm text-gray-700 flex items-center' > <FaPowerOff className='me-2' /> logout</button>
            </div> }
          
          </div>
          }
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