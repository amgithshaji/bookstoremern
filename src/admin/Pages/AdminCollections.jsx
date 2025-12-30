import React, { useEffect, useState } from 'react'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import Footer from "../../components/Footer"
import { getAllAdminBooksAPI, getAllAdminUsersAPI, updateBookStatusAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify';

function AdminCollections() {
  const[tab,setTab] = useState(1)
  const [allBooks,setAllBooks] = useState([])
  console.log(allBooks);
      const [allusers,setAllUsers] = useState([])
console.log(allusers);

 useEffect(()=>{
const token = sessionStorage.getItem("token")
if (token) {
  if (tab == 2) {
    getAllUsers(token)
  }
  
}
  },[tab])

   const getAllUsers = async (token)=>{
    const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await getAllAdminUsersAPI (reqHeader)
    if (result.status==200) {
      setAllUsers(result.data)
      
    }else{
      console.log(result);
      
    }
  }
  


  useEffect(()=>{
const token = sessionStorage.getItem("token")
if (token) {
  if (tab == 1) {
    getAllBooks(token)
  }
  
}
  },[tab])

  const getAllBooks = async (token)=>{
    const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await getAllAdminBooksAPI (reqHeader)
    if (result.status==200) {
      setAllBooks(result.data)
      
    }else{
      console.log(result);
      
    }
  }

  const updateBookStatus = async (id)=>{
    const token = sessionStorage.getItem("token")
    if (token) {
          const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await updateBookStatusAPI(id,reqHeader)
    if (result.status==200) {
      toast.success("book status updated")
      getAllBooks(token)
    }else{
      console.log(result);
      
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
  <h1 className='my-10 text-center text-2xl font-bold' > All collection</h1>
  {/* tabs */}
  <div className="flex my-10 justify-center items-center">
    <p onClick={()=>setTab(1)}   className={tab==1?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer ':'border-gray-200 border-b p-4 cursor-pointer' }>Books</p>
<p  onClick={()=>setTab(2)}   className={tab==2?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer ':'border-gray-200 border-b p-4 cursor-pointer '}>User</p>
  </div>
  {/* tab contents */}
  {
    tab==1 &&
    <div className='md:grid grid-cols-4 w-full my-5' >
       {/* duplicate book card div */}
  {
    allBooks?.length>0?
    allBooks?.map(book=>(
      <div key={book?._id} className='shadow  rounded p-3 mx-4' >
    <img width={'200px'} height={'200px'} src={book?.imageURL} alt="books" />
<div className='flex justify-center items-center flex-col mt-4' >
  <h3 className='text-blue-600 font-bold text-lg' >{book?.author}</h3>
  <h4 className='text-lg' >{book?.title}</h4>
  <h4>$ {book?.discountPrice}</h4>
<div className='grid mt-3 w-full'>
  
{
  book?.Status !="approved"?
     <button onClick={()=>(updateBookStatus(book?._id))} className='bg-green-600 mt-3 py-3 px-3 text-white'>APPROVE</button>
:
<img width={'60px'} src="https://www.iconpacks.net/icons/2/free-check-icon-3278-thumb.png" alt="check img" />
}  
</div>
</div>
  </div>
    ))
    :
    <p> loading...</p>
  }
    </div>
  }
   {
    tab==2 &&
    <div className='md:grid grid-cols-3 w-full my-5' >
      {/* duplicate user cart */}
   {
    allusers?.length>0?
    allusers?.map(user=>(
         <div key={user?._id} className="rounded bg-gray-200 p-3 m-2 text-warp">
        <p className='text-red-600 font-bold'>{user?._id}</p>
        <div className='flex justify-between text-wrap mt-2'>
        {/* user image */}
        <img width={'80px'} height={'200px'} style={{borderRadius:'50%'}} src={user?.picture?user?.picture.startsWith("https://lh3.googleusercontent.com/")?user?.picture:`${serverURL}/uploads/${user.picture}`:"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"} alt="user img" />
        {/* content */}
        <div className='ms-5' >
          <h4 className='font-bold text-1xl text-blue-800'>{user?.username}</h4>
           <p>{user?.email}</p>
        </div>
        </div>
      </div>
    ))
    :
    <p>loading...</p>
   }
    </div>
  }
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

export default AdminCollections