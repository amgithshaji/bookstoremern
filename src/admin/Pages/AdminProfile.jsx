import React, { useEffect } from 'react'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import Footer from "../../components/Footer"
import { FaPen } from 'react-icons/fa'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { editUserAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';




function AdminProfile() {


    const [userDetails,setUserDetails] = useState({
    id:"",username:"",password:"",role:"",bio:"",picture:""
  })

  const [ConfirmPassword,setConfirmPassword] = useState("")
  const [existingPicture,setexistingPicture] = useState("")
  const [preview,setPreview] = useState("")
  const [passwordMatch,setPasswordMatch] = useState(true)
  const navigate = useNavigate()

   useEffect(()=>{
      if (sessionStorage.getItem("user")) {
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio})
        setexistingPicture(user.picture)
        
      }
    },[])

     const handleUploadPicture = (imgFile)=>{
    setUserDetails({...userDetails,picture:imgFile})
    const url = URL.createObjectURL(imgFile)
    setPreview(url)
  }

  const checkPasswordmatch = (data)=>{
setConfirmPassword(data)
userDetails.password == data ? setPasswordMatch(true):setPasswordMatch(false)
  }

    const reset = ()=>{
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio,password:""})
      setexistingPicture(user.picture)
      setPreview("")
      setConfirmPassword("")
      setPasswordMatch(true)
  }

  const handleProfileUpdate = async()=>{
    const {username,password,bio,role,id,picture} = userDetails
    if (!username || !password || !ConfirmPassword) {
      toast.info("please fill the form completely")
      
    }else{
      const token = sessionStorage.getItem("token")
      if (token) {
          const reqHeader = {
          "Authorization" : `Bearer ${token}`
        }
        const reqBody = new FormData()
        for(let key in userDetails){
  if (key != "picture") {
    reqBody.append(key,userDetails[key])
  }else{
    preview ? reqBody.append("picture",userDetails.picture):reqBody.append("picture",existingPicture)
  }
        }
        const result = await editUserAPI(id,reqBody,reqHeader)
        if (result.status==200) {
          toast.success("picture updated successfully...pleasse login with new password")
          setTimeout(()=>{
            navigate('/login')
          },2000);
          
        }else{
          console.log(result);
          toast.error("something went wrong")
        }
      }
    }
  }
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
              <input onChange={e=>handleUploadPicture(e.target.files[0])} type="file" id='uploading' hidden />
           {
            existingPicture ?
               <img style={{ width: "230px", height: "230px", borderRadius: "50%", }} src={preview?preview:existingPicture.startsWith("https://lh3.googleusercontent.com/")?existingPicture:`${serverURL}/uploads/${existingPicture}`} alt="no img" />
               :
                  <img style={{ width: "230px", height: "230px", borderRadius: "50%", }} src={preview?preview:"https://img.freepik.com/premium-vector/user-profile-icon-circle_1256048-12499.jpg?semt=ais_hybrid&w=740&q=80"} alt="no img" />
           }
            </label>
            <button style={{marginTop:"-20px"}} className='bg-yellow-300 p-2 text-white rounded' > <FaPen/> </button>
                  {/* name */}
            <div className="m-10 mb-3 w-full px-5">
<input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='username' className= 'border border-gray-800 p-2 rounded w-full' />
            </div>
            {/* password */}
                <div className=" mb-3 w-full px-5">
<input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='new password' className= 'border border-gray-800 p-2 rounded w-full' />
            </div>
            
                     <div className=" mb-3 w-full px-5">
<input value={ConfirmPassword} onChange={e=>checkPasswordmatch(e.target.value)} type="password" placeholder='Confirm password' className= 'border border-gray-800 p-2 rounded w-full' />
            </div>
                {!passwordMatch && <div className=" mb-3 w-full px-5 font-bold text-red-600 text-xs">
                  *confirm password must match with new password
            </div> }
         
            {/* button */}
                <div className=" mb-3 flex justify-center px-5 w-full mt-5 ">
                  <button onClick={reset} className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'> RESET</button>
                  <button  onClick={handleProfileUpdate} className='px-3 py-2 rounded border bg-blue-600 text-white  hover:bg-white hover:border-blue-600 hover:text-green-600'disabled= {!passwordMatch?true:false}>UPDATE</button>

            </div>
          </div>
</div>
</div>
    </div>
    <Footer/>
       {/* toast container */}
                <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  theme="colored"
                />
    </> 
  )
}

export default AdminProfile