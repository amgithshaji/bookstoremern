import React, { useEffect, useState } from 'react'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import Footer from "../../components/Footer"
import { getAllAdminBooksAPI } from '../../services/allAPI'
function AdminCollections() {
  const[tab,setTab] = useState(1)
  const [allBooks,setAllBooks] = useState([])

  console.log(allBooks);
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
<div className='grid mt-3 w-full'> <button className='bg-green-600 mt-3 py-3 px-3 text-white'>APPROVE</button>
  
</div>
</div>
  </div>
    ))
    :
    <p> loading</p>
  }
    </div>
  }
   {
    tab==2 &&
    <div className='md:grid grid-cols-3 w-full my-5' >
      {/* duplicate user cart */}
      <div className="rounded bg-gray-200 p-3 m-2 text-warp">
        <p className='text-red-600 font-bold'>ID : hhjh44545364</p>
        <div className='flex justify-between text-wrap mt-2'>
        {/* user image */}
        <img width={'80px'} height={'200px'} style={{borderRadius:'50%'}} src="https://mobilenetrix.com/assets/client/app/media/img/users/profile_user.jpg" alt="user img" />
        {/* content */}
        <div className='ms-5' >
          <h4 className='font-bold text-2xl text-blue-800'>name</h4>
           <p>demo@email.com</p>
        </div>
        </div>
      </div>
    </div>
  }
</div>
    </div>
    <Footer/>
    </> 
     )
}

export default AdminCollections