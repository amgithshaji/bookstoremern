import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offCanvasStatus,setoffCanvasStatus]= useState(false)
  return (
    <div>
      <button onClick={()=>setoffCanvasStatus(true)} className='flex items-center text-blue-600 border p-2 rounded hover:text-white hover:bg-blue-500' >edit <FaEdit className='ms-3' /> </button>
      {/* offcanvas */}
      { offCanvasStatus &&
      <div>
        <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
        </div>
        <div className='bg-white h-full z-52 w-90 fixed top-0 left-0'>
          {/*  header*/}
          <div className="bg-black p-3  flex justify-between text-white">
            <h3 className="text-xl">update profile</h3>
            <button onClick={()=>setoffCanvasStatus(false)}>  <FaX /> </button>
          </div>
          {/* body */}
          <div className="flex justify-center items-center flex-col my-5 ">
            {/* image */}
            <label htmlFor="uploading">
              <input type="file" id='uploading' hidden />
              <img style={{ width: "230px", height: "230px", borderRadius: "50%", }} src="https://mobilenetrix.com/assets/client/app/media/img/users/profile_user.jpg" alt="no img" />
            </label>
              <button style={{marginTop:"-20px"}} className='bg-yellow-300 p-2 text-white rounded' > <FaPen/> </button>
            
            {/* name */}
            <div className="m-10 mb-3 w-full px-5">
<input type="text" placeholder='username' className= 'border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* password */}
                <div className=" mb-3 w-full px-5">
<input type="password" placeholder='new password' className= 'border border-gray-200 p-2 rounded w-full' />
            </div>
                     <div className=" mb-3 w-full px-5">
<input type="password" placeholder='Confirm password' className= 'border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* bio */}
                   <div className=" mb-3 w-full px-5">
<textarea type="text" placeholder='bio' row={2} className= 'border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* button */}
                <div className=" mb-3 flex justify-end px-5 w-full mt-5 ">
                  <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'> RESET</button>
                  <button className='px-3 py-2 rounded border bg-green-600 text-white  hover:bg-white hover:border-green-600 hover:text-green-600'>UPDATE</button>

            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Edit