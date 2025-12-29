import React, { useEffect, useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import serverURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { editUserAPI } from '../../services/allAPI';

function Edit() {
  const [offCanvasStatus,setoffCanvasStatus]= useState(false)
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
  if (!username || !password || !bio || !ConfirmPassword) {
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
<input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='username' className= 'border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* password */}
                <div className=" mb-3 w-full px-5">
<input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='new password' className= 'border border-gray-200 p-2 rounded w-full' />
            </div>
            
                     <div className=" mb-3 w-full px-5">
<input value={ConfirmPassword} onChange={e=>checkPasswordmatch(e.target.value)} type="password" placeholder='Confirm password' className= 'border border-gray-200 p-2 rounded w-full' />
            </div>
                {!passwordMatch && <div className=" mb-3 w-full px-5 font-bold text-red-600 text-xs">
                  *confirm password must match with new password
            </div> }
            {/* bio */}
                   <div className=" mb-3 w-full px-5">
<textarea value={userDetails.bio} onChange={e=>setUserDetails({...userDetails,bio:e.target.value})} type="text" placeholder='bio' row={2} className= 'border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* button */}
                <div className=" mb-3 flex justify-end px-5 w-full mt-5 ">
                  <button onClick={reset} className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'> RESET</button>
                  <button onClick={handleProfileUpdate} className='px-3 py-2 rounded border bg-green-600 text-white  hover:bg-white hover:border-green-600 hover:text-green-600' disabled= {!passwordMatch?true:false} >UPDATE</button>

            </div>
          </div>
        </div>
      </div>
      }
       {/* toast container */}
            <ToastContainer
              position="top-center"
              autoClose={2000}
              theme="colored"
            />
    </div>
  )
}

export default Edit