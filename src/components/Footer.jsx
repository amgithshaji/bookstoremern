import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
function Footer() {
  return (
    <>
   <footer className="bg-gray-900 text-white p-5 gap-8">
  <div className="md:grid grid-cols-3  p-5 ">
    {/* about us */}
    <div>
      <h3 className="font-bold mb-5">ABOUT US</h3>
      <p className="text-gray-300">
        We are a trusted online bookstore dedicated to giving books a second life. Our platform connects readers with high-quality new and pre-owned books at affordable prices. From timeless classics to modern bestsellers, we make it easy for book lovers to discover, buy, and resell their favourite reads.
      </p>
    </div>
{/* news letter */}
    <div>
      <h3 className="font-bold mb-5">NEWS LETTER</h3>
      <p className="text-gray-300 mb-4">Stay updated with our latest trends</p>
      <div className="flex">
        <input type="email" placeholder="Email ID" class=" w-70 text-black bg-white rounded" />
        <button type="text" className="bg-yellow-500 px-2 py-2 rounded">→</button>
      </div>
    </div>
{/* follow us */}
    <div>
      <h3 className="font-bold mb-5">FOLLOW US</h3>
      <p className="text-gray-300 mb-4">Let us be social</p>
      <div class="flex space-x-4 text-xl">
      <FaInstagram className='text-2xl' />
               <FaFacebook className=' text-2xl' />
               <FaXTwitter className='text-2xl' />
      </div>
    </div>
  </div>


</footer>
  <div className="bg-black text-gray-400 text-center py-4 text-sm">
    Copyright © 2023 All rights reserved | This website is made with <span className='text-white'>♥</span> By Amgith Shaji
  </div>

    </>
  )
}

export default Footer