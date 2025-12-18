import React, { useEffect, useState } from 'react'
import { getAllUserBooksAPI } from '../../services/allAPI';

function BookStatus() {
  const[userBooks,setUserBooks] = useState([])
console.log(userBooks);

useEffect(()=>{
  getUserUploadbooks()
},[])

  const getUserUploadbooks = async ()=>{
const token = sessionStorage.getItem("token")
if (token) {
  const reqHeader = {
    "Authorization" : `Bearer ${token}`
  }
  const result = await getAllUserBooksAPI(reqHeader)
  if (result.status==200) {
    setUserBooks(result.data)
  }else{
    console.log(result);
    
  }
}
  }

  return (
    <div className="p-10 my-20 mx-5 shadow rounded">
        {/* book div duplicate  */}
       {
        userBooks?.length>0?
          userBooks?.map(book=>(
             <div key={book?._id} className="bg-gray-200 p-5 rounded mb-3">
          <div className="md:grid grid-cols-[3fr_1fr]">
            <div>
               <h2 className='text-2xl' >{book?.title}</h2>
               <h3 className='text-xl' >{book?.author}</h3>
               <h4 className='text-lg text-red-600' >${book?.discountPrice}</h4>
               <p className='text-justify' >{book?.abstract}</p>
               <div className="flex mt-5">
                   {/* pending */}
                
                   {/* approved */}
              
                   {/* sold */}
            
              {
                book?.Status=="pending"?
                   <img width={'170px'} height={'170'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />
                : book?.Status=="approved"?
                  <img width={'170px'} height={'170'} src="https://psdstamps.com/wp-content/uploads/2020/09/round-approved-stamp-png.png" alt="approved" />
                :
                  <img width={'170px'} height={'170'} src="https://psdstamps.com/wp-content/uploads/2019/12/round-sold-out-stamp-png.png" alt="sold" />
              }
                </div>
            </div>
            <div className='px-4 mt-4 md:mt-0'>
                <img className='w-50' src={book?.imageURL} alt="no img" />
               <div className='flex justify-end'> <button className='p-2 bg-red-600 text-white mt-5 rounded ' > DELETE</button></div>
            </div>
          </div>
        </div>
          ))

        :
        <div className='text-center font-bold my-5' >Books are not uploaded yet... </div>
       }
    </div>
  )
}

export default BookStatus