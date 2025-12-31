import React, { useEffect, useState } from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaChartBar, FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import serverURL from '../../services/serverURL'


function AdminSideBar() {


  const [dp,setDp] = useState("")
    const [username,setUsername] = useState("")
    console.log(dp);
  
    useEffect(()=>{
      if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
          const user = JSON.parse(sessionStorage.getItem("user"))
          setUsername(user?.username)
          setDp(user?.picture)
  
      }
    },[])
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center' >
      {/* admin img */}
      <div className="my-5 flex justify-center items-center">
<img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src={dp?dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`:"https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740&q=80"} alt="user img" />

      </div>
      {/* name */}
      <h1 className='text-xl font-bold mb-5' >{username}</h1>
      {/* links */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="mb-3">
         <Link to={'/admin/home'} className='flex items-center' > <FaHome className='me-1' /> Dashboard</Link>
        </div>
          <div className="mb-3">
         <Link to={'/admin/resources'} className='flex items-center' > <FaBookReader className='me-1' /> Resources</Link>
        </div>
          <div className="mb-3">
         <Link to={'/admin/profile'} className='flex items-center' > <FaGears className='me-1' />Settings</Link>
        </div>
      </div>
      </div>
  )
}

export default AdminSideBar