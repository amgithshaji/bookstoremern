import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { getHomePageBookAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'


function Home() {
  const navigate = useNavigate()
// const [searchKey,setsearchKey] = useState("")
const {searchKey,setsearchKey} = useContext(searchContext)
const [homeBooks,setHomeBooks] = useState([])

console.log(homeBooks);

useEffect(()=>{
  getHomeBooks()
},[])

const getHomeBooks = async ()=>{
  const result = await getHomePageBookAPI()
  if (result.status==200) {
    setHomeBooks(result.data)
    
  }else{
    console.log(result);
    
  }
}

const handleSearch = ()=>{
  if (!searchKey) {
    toast.warning("please provide A book title here")
    
  }else if (!sessionStorage.getItem("token")) {
        toast.warning("please login to search books")
   setTimeout(()=>{
    navigate('/login')
   },2500);
    
  }else if(sessionStorage.getItem("token")&& searchKey){
    navigate('/books')
  }else{
    toast.error("something went wrong")
  }
  
}

  return (

    <>
    <Header/>
   <div>
    {/* landing part - search */}
    <div style={{height:"590px"}} className='flex justify-center items-center flex-col bg-[url(/bg-image.png)] bg-cover bg-center text-white' >
  <div style={{height:"590px",backgroundColor:'rgba(0,0,0,0.4)'}} className='w-full flex justify-center items-center flex-col text-white' >
    <h1 className='text-5xl font-bold mb-2' >Wonderful Gifts</h1>
    <p >Gift Your Family and Friends  Book</p>
{/* search */}
<div className='mt-9 flex items-center' >
  <input onChange={e=>setsearchKey(e.target.value)} type="text" className='bg-white rounded-3xl text-black w-90 placeholder-gray-500 p-2' placeholder='search books here' />
<button onClick={handleSearch} className='text-gray-500' style={{marginLeft:"-40px"}} >
   <FaSearch/>
  
</button>
</div>
    </div>
    </div>
    {/* new arrival */}
    <section className='md:px-40 p-5 flex flex-col  justify-center items-center' >
      <h1 className='text-3xl font-bold' >NEW ARRIVAL</h1>
      <h2 className='text-2xl' >Explore Our Latest Collection</h2>
{/* books row & col */}
<div className="md:grid grid-cols-4 w-full mt-10">
  {/* duplicate book card div */}
 {
  homeBooks?.length>0?
homeBooks?.map(book=>(
   <div key={book?._id} className='shadow  rounded p-3 mx-4 mb-5 md:mb-0' >
    <img width={'200px'} height={'200px'} src={book?.imageURL} alt="books" />
<div className='flex justify-center items-center flex-col mt-4' >
  <h3 className='text-blue-600 font-bold text-lg' >{book?.author}</h3>
  <h4 className='text-lg' >{book?.title}</h4>
  <h4>$ {book?.discountPrice}</h4>
</div>
  </div>
))
  :
  <p>Loading.....</p>
 }


</div>
{/* all books link */}
<div className="text-center">
<Link to={'/books'}>  <button className="p-2 bg-blue-600 text-white mt-10 rounded">Explore More</button></Link>
</div>
    </section>
    {/* author */}
    <section  className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10' >
      {/* author content */}
      <div className='text-center'>
      <h1 className='text-3xl font-bold' >FEATURED AUTHOR</h1>
       <h2 className='text-2xl' >Crafting Stories That Stay With You</h2>
      <p className='text-justify mt-10' >Paulo Coelho is an internationally acclaimed Brazilian author best known for his masterpiece The Alchemist, one of the most widely read and translated books in the world. His writing blends spirituality, self-discovery, and universal wisdom, touching millions of readers across generations.</p>

  <p className='text-justify mt-5' >With a unique ability to turn simple stories into profound life lessons, Coelho inspires readers to follow their dreams, trust their journey, and listen to their hearts. His works continue to shape modern literature and motivate people to find purpose and meaning in everyday life.</p>
        
      </div>
{/* author img */}
<div className='p-5 flex justify-center items-center' >
  <img className='w-full' src="https://cdn.britannica.com/67/126567-050-A5C3A312/Paulo-Coelho-departure-themes-thriller-serial-killer-2008.jpg" alt="author img" />

</div>
    </section>
    {/* testimony */}
      <section className='md:px-40 p-5 flex flex-col  justify-center items-center' >
      <h1 className='text-3xl font-bold' >TESTMONIALS </h1>
      <h2 className='text-2xl' >See What Others Are Saying</h2>
      <div className='my-10 flex justify-center items-center flex-col' >
{/* user img */}
<img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://mobilenetrix.com/assets/client/app/media/img/users/profile_user.jpg" alt="user img" />
{/* feedback */}
<p className='mt-5 font-bold ' >Damon Salvator</p>
<p className=' text-justify mt-4' ><span className='font-bold me-2' >"The book has a strong foundation with interesting ideas and relatable characters"</span>I particularly enjoyed the plot development in the first half. However, a few sections felt slightly rushed and could benefit from deeper explanation. Still, a very enjoyable and worthwhile read.</p>
      </div>
    </section>
   </div>
    <Footer/>
       {/* toast container */}
          <ToastContainer
            position="top-center"
            autoClose={2000}
            theme="colored"
          />
    </>
  )
}

export default Home