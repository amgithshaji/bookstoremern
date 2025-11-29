import React from 'react'

function BookStatus() {
  return (
    <div className="p-10 my-20 mx-5 shadow rounded">
        {/* book div duplicate  */}
        <div className="bg-gray-200 p-5 rounded">
          <div className="md:grid grid-cols-[3fr_1fr]">
            <div>
               <h2 className='text-2xl' >Title</h2>
               <h3 className='text-xl' >Author</h3>
               <h4 className='text-lg text-red-600' >$400</h4>
               <p className='text-justify' >Abstract</p>
               <div className="flex mt-5">
                   {/* pending */}
                   <img width={'170px'} height={'170'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" />
                   {/* approved */}
                <img width={'170px'} height={'170'} src="https://psdstamps.com/wp-content/uploads/2020/09/round-approved-stamp-png.png" alt="" />
                   {/* sold */}
              <img width={'170px'} height={'170'} src="https://psdstamps.com/wp-content/uploads/2019/12/round-sold-out-stamp-png.png" alt="" />
                </div>
            </div>
            <div className='px-4 mt-4 md:mt-0'>
                <img className='w-50' src="https://m.media-amazon.com/images/I/81ioPZFMeUL._UF1000,1000_QL80_.jpg" alt="no img" />
               <div className='flex justify-end'> <button className='p-2 bg-red-600 text-white mt-5 rounded ' > DELETE</button></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BookStatus