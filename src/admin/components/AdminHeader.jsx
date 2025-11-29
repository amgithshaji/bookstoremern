import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
 <>
      <div className='flex justify-between items-center p-3 md:px-20' >
        {/* logo with title */}
        <div className="flex items-center">
          <img width={'70px'} height={'70px'} src="https://thumbs.dreamstime.com/b/book-icon-vector-design-library-symbol-web-graphic-jpg-ai-app-logo-object-flat-image-sign-eps-art-picture-stock-79808709.jpg" alt="logo" />
  <p className='font-bold text-2xl' >BOOKSTORE</p>
        </div>
        {/* logout */}
          <button  className='ms-4 border rounded py-1 px-2 bg-black text-white hover:bg-white hover:text-black flex items-center ' > 
          <FaPowerOff className='me-2'/>LOG OUT</button>  
          
          
      </div>
      {/* header lower part */}
      <div className="bg-black p-2">
<marquee >
  <p className='text-white' >Welcome,admin! You're all set to manage and monitor the system. lets get into work</p>
</marquee>
      </div>
 </>
  )
}

export default AdminHeader