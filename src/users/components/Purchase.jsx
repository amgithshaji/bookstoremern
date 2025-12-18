import React, { useEffect, useState } from 'react'
import { getUserBroughtBooksAPI } from '../../services/allAPI';

function Purchase() {

const [broughtBook,setBroughtBook] = useState([])
console.log(broughtBook);

useEffect(()=>{
getuserBroughtBook()
},[])

const getuserBroughtBook = async ()=>{
  const token = sessionStorage.getItem("token")
  if (token) {
    const reqHeader ={
      "Authorization" : `Bearer ${token}`
    }
    const result = await getUserBroughtBooksAPI(reqHeader)
    if (result.status==200) {
      setBroughtBook(result.data)
      
    }else{
    console.log(result);

    }
    
    
  }
}


  return (
    <div className="p-10 my-20 mx-5 shadow rounded">
        {/* book div duplicate  */}
       {
        broughtBook?.length>0?
        broughtBook?.map(book=>(
           <div key={book?._id} className="bg-gray-200 p-5 rounded">
          <div className="md:grid grid-cols-[3fr_1fr]">
            <div>
               <h2 className='text-2xl' >{book?.title}</h2>
               <h3 className='text-xl' >{book?.author}</h3>
               <h4 className='text-lg text-red-600' >${book?.discountPrice}</h4>
               <p className='text-justify' >{book?.abstract}</p>
               <div className="flex mt-5">
                   {/* pending */}
                   <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png" alt="no img" />
                
                </div>
            </div>
            <div className='px-4 mt-4 md:mt-0'>
                <img className='w-50' src={book?.imageURL} alt="no img" />
            </div>
          </div>
        </div>
        ))
        :

        <div className='font-black text-center' >You haven't brought a book </div>
       }
    </div>
  )
}

export default Purchase