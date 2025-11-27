import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { FaTelegramPlane } from "react-icons/fa";


function Contact() {
  return (
    <div>
      <Header/>
        <div className="w-full min-h-screen bg-white px-4 py-10">
      {/* HEADER */}
      <h1 className="text-3xl font-semibold text-center">
        Contacts
      </h1>

      <p className="text-gray-600 text-center max-w-4xl mx-auto mt-4 text-sm md:text-base">
    Whether you’re searching for your next great read, need help with an order, or simply want to reach out, we’re always happy to hear from fellow book lovers. Contact us and our team will assist you with everything you need.
      </p>

      {/* CONTACT INFO */}
      <div className="md:flex  justify-evenly items-center my-10 ">
        
        {/* Address */}
        <div className="flex items-center my-3 gap-4">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl"><FaLocationDot /></span>
          </div>
          <div>
            <p className="font-medium">kakkanad,Kra lane 4,</p>
            <p className="text-gray-600">kerala, 689643</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center my-3 gap-4">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl"><FaPhoneAlt /></span>
          </div>
          <p className="font-medium">+91 7546474209</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl"><IoIosMail /></span>
          </div>
          <p className="font-medium">Bookstore@gmail.com</p>
        </div>
      </div>

      {/* FORM + MAP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">

        {/* Contact Form */}
        <div className="bg-gray-100 px-6 py-6 rounded-lg shadow-sm">
          <h2 className="text-center font-semibold text-lg mb-4">
            Send me Message
          </h2>

          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name"className="border border-gray-300 rounded-md p-3 "/>
            <input type="email"placeholder="Email ID"className="border border-gray-300 rounded-md p-3 "/>
            <textarea placeholder="message"rows="4"className="border border-gray-300 rounded-md p-3 resize-none "/>
            <button className="bg-gray-800 text-white rounded-md py-2 mt-2 hover:bg-gray-900 transition flex items-center justify-center gap-2"> Send <FaTelegramPlane className="text-white text-lg" /></button>
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full h-100 rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.984172422051!2d76.34009657479382!3d10.018164390088167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Python%2C%20Data%20Science%2C%20AI%2C%20ASP.NET%2C%20Flutter%2C%20Software%20Testing%20Training%20Institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1764187486392!5m2!1sen!2sin"
            width="100%"
            height="100%"
           
          ></iframe>
        </div>
      </div>
    </div>
    <Footer/>
</div>
  )
}

export default Contact