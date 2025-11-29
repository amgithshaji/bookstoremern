import React from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaChartBar, FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center' >
      {/* admin img */}
      <div className="my-5 flex justify-center items-center">
<img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://mobilenetrix.com/assets/client/app/media/img/users/profile_user.jpg" alt="user img" />

      </div>
      {/* name */}
      <h1 className='text-xl font-bold mb-5' >name</h1>
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