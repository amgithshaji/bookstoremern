import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div> <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Illustration */}
      <img src="/pnff.gif" alt="img"className="w-100  mb-6" />

      {/* Small heading */}
      <p className="text-gray-500 ">Oh No !</p>

      {/* Main heading */}
      <h1 className="text-2xl text-center mt-2">
        Look Like You're Lost
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-center mt-2 md:text-lg">
        The page you are looking for is not available
      </p>

      {/* Button */}
     <Link to={'/'}>
        <button
       
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          BACK HOME
        </button>
     </Link>
     
    </div>
    </div>
  )
}

export default Pnf