import React from 'react'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import Footer from "../../components/Footer"
import { FaPen } from 'react-icons/fa'
function AdminProfile() {
  return (
       <>
    <AdminHeader/>
    <div className='md:grid grid-cols-5' >
<div className="col-span-1">
  <AdminSideBar/>
</div>
<div className="col-span-4 p-10">
  <h1 className="text-center my-5 font-bold text-5xl"> Settings </h1>
<div className="md:grid grid-cols-2 items-center mt-10 gap-10">
{/* text */}

<div>
  <h2 className='text-xl font-bold mb-5'>welcome to admin setting panel</h2>
  <p className='text-justify mb-5'>
This dashboard serves as your complete control center for managing every part of your online bookstore. From updating book details and organizing categories to monitoring orders, handling user accounts, and customizing website settings, everything you need is gathered in one easy-to-use space. Use this panel to keep your store updated, improve customer experience, and ensure your bookstore runs smoothly and efficiently every day.
  </p>
  <p className='font-bold mb-2'>
    Account setting
  </p>
  <p> Update your personal information, change your password, and customize your login preferences to keep your admin profile secure and up to date. Make sure your details are accurate to ensure smooth access and better control over your bookstore management.</p>
</div>
{/* form */}
  <div className="flex justify-center items-center flex-col my-5 bg-blue-100 ">
            {/* image */}
            <label htmlFor="uploading">
              <input type="file" id='uploading' hidden />
              <img style={{ width: "230px", height: "230px", borderRadius: "50%", }} src="https://mobilenetrix.com/assets/client/app/media/img/users/profile_user.jpg" alt="no img" />
            </label>
            <button style={{marginTop:"-20px"}} className='bg-yellow-300 p-2 text-white rounded' > <FaPen/> </button>
            {/* name */}
            <div className="m-10 mb-3 w-full px-5">
<input type="text" placeholder='username' className= 'bg-white p-2 rounded w-full' />
            </div>
            {/* password */}
                <div className=" mb-3 w-full px-5">
<input type="password" placeholder='new password' className= 'bg-white p-2 rounded w-full' />
            </div>
                     <div className=" mb-3 w-full px-5">
<input type="password" placeholder='Confirm password' className= 'bg-white p-2 rounded w-full' />
            </div>
         
            {/* button */}
                <div className=" mb-3 flex justify-center px-5 w-full mt-5 ">
                  <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'> RESET</button>
                  <button className='px-3 py-2 rounded border bg-blue-600 text-white  hover:bg-white hover:border-blue-600 hover:text-green-600'>UPDATE</button>

            </div>
          </div>
</div>
</div>
    </div>
    <Footer/>
    </> 
  )
}

export default AdminProfile