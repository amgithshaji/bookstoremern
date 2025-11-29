import React from 'react'

function Purchase() {
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
                   <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png" alt="no img" />
                
                </div>
            </div>
            <div className='px-4 mt-4 md:mt-0'>
                <img className='w-50' src="https://m.media-amazon.com/images/I/81ioPZFMeUL._UF1000,1000_QL80_.jpg" alt="no img" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Purchase