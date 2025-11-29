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
<p className='font-bold mb-2'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto nostrum, cupiditate fugiat dicta pariatur sequi, blanditiis quisquam laudantium repellat excepturi sint soluta sed aspernatur repellendus veritatis perspiciatis eveniet sapiente.
</p>
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