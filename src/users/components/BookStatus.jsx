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
                   <img width={'120px'} height={'120'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArBtZ2X6y7Q1UDNhpXEkIBFIlftfOSaAe0g&s" alt="" />
                   {/* approved */}
                <img width={'120px'} height={'120'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd60BwQe5NyPu9i_L4K4gdp3a9vPy5SfRzYw&s" alt="" />
                   {/* sold */}
              <img width={'120px'} height={'120'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd60BwQe5NyPu9i_L4K4gdp3a9vPy5SfRzYw&s" alt="" />
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