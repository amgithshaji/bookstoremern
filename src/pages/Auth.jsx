import React, { useState } from 'react'
import { FaEyeSlash, FaUser } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
  import { ToastContainer, toast } from 'react-toastify';


function Auth({insideRegister}) {
  const [viewPassword,setViewPassword]=useState(false)
// strore data from 
const [userDetails,setUserDetails]= useState({
  username:"", email:"", password:""
}) 
// console.log(userDetails);
const handleRegister =(e)=>{
  e.preventDefault()
  const {username,email,password}= userDetails
  if (email && password && username) {
    toast.success("API CALL")
    
  }else{
    toast.info("please fill the form completely")
  }
}


  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/auth-bg.jpg)] bg-cover bg-center' >

      <div className='p-10' >
        <h1 className='text-3xl font-bold text-white text-center' >BOOK STORE</h1>
        <div style={{width:"400px"}} className='bg-black text-white p-5  flex flex-col justify-center items-center my-5 ' >
<div style={{width:"100px",height:"100px",borderRadius:"50%"}} className='border mb-5 flex justify-center items-center'>
  <FaUser className='text-3xl' />


</div>
<h2 className='text-2xl' >{insideRegister?"Register":"Login"}</h2>
<form className='my-5 w-full' >
  {/* username */}
  {
    insideRegister&& 
    <input value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5' />

  }
{/* email */}
<input  value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}  type="text" placeholder='Email ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5' />
{/* password */}
<div className='flex items-center ' >
  <input  value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}   type={viewPassword?"text":"password"} placeholder='Password' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5 ' />
  {
viewPassword?
  
  <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400  cursor-pointer'  style={{marginLeft:"-30px",marginTop:"-20px"}}/>
  :
<FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400  cursor-pointer '  style={{marginLeft:"-30px",marginTop:"-20px"}}/>
}

</div>
{/* forgot password */}
{
  !insideRegister &&
  <div className='flex justify-between mb-5 ' >
    <p className='text-xs text-orange-300' >*never Share User Password With Others</p>
    <button className='text-xs underline' >Forgot Password</button>

  </div>
}
{/* login/register btn */}
<div className='text-center' >
{
  insideRegister?
  <button onClick={handleRegister} type='button' className='bg-green-700 p-2 w-full rounded' >Register</button>
  :
    <button type='button' className='bg-green-700 p-2 w-full rounded' >Login</button>

}

</div>
{/* goolge authentication */}
<div className='my-5 text-center' >
  {
    insideRegister?
    <p className='text-blue-600' >Already a user? <Link to={'/login'} className='underline ms-5' >Login</Link></p>
    :
     <p className='text-blue-600' >Are You a New User <Link to={'/register'} className='underline ms-5' >Register</Link></p>
  }
</div>

</form>
        </div>

      </div>
      {/* toast container */}
      <ToastContainer
position="top-center"
autoClose={5000}
theme="colored"
/>

    </div>
  )
}

export default Auth