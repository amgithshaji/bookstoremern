import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBooksPageAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'


function Books() {
const {searchKey,setsearchKey} = useContext(searchContext)
const [showCatergoryList,setShowCaterogyList] = useState(false)
const [token,setToken] = useState("")
 const [allBooks,setAllBooks] = useState([])
 console.log(allBooks);
 const[allCategory,setAllCategory] = useState([])
 console.log(allCategory);
 const [tempAllBooks,setTempAllBooks] = useState([])
 
 

useEffect(()=>{
  if (sessionStorage.getItem("token")){
    const usertoken = sessionStorage.getItem("token")
    setToken(usertoken)
    getAllBooks(usertoken)
  }

},[searchKey])
 const getAllBooks = async (token)=>{
const reqHeader = {
  "Authorization" : `Bearer ${token}`

}
const result = await getAllBooksPageAPI(reqHeader,searchKey)
if (result.status==200) {
  setAllBooks(result.data)
  setTempAllBooks(result.data)
  const tempAllcategory = result.data?.map(item=>item.category)
  const tempCategorySet = new Set(tempAllcategory)
  console.log([...tempCategorySet]);
 setAllCategory([...tempCategorySet])
  
}else{
  console.log(result);
  
}
 }

 const filterBooks = (category)=>{
 if (category=="all") {
    setAllBooks(tempAllBooks)
 }else{
  setAllBooks(tempAllBooks?.filter(item=>item.category==category))
 }
 }




  return (
    <>
    <Header/>
    {
      token?
    <>
    {/* login books page */}
    <div className="flex flex-col justify-center items-center my-5">
{/* Title */}
<h1 className='text-3xl font-bold my-5'>All Books</h1>
{/* search box */}
<div className='flex my-5'>
  <input value={searchKey} onChange={e=>setsearchKey(e.target.value)} type="text" placeholder='search by title' className='border p-2 border-gray-400 w-100' />
  <button className='bg-black p-2 text-white' >search</button>
  {/* booke & filter row */}
 

</div>

    </div>
     <div className='md:grid grid-cols-4  md:px-20 p-5 mb-10' >
{/* filter */}
<div className='col-span-1' >
  {/* filter -title */}
  <div className='flex justify-between' >
    <h1 className='text-2xl font-semibold' >Filter</h1>
    <button onClick={()=>setShowCaterogyList(!showCatergoryList)} className='text-2xl md:hidden' > <FaBars/> </button>

  </div>
  {/* filter option */}
  <div className={showCatergoryList?'block':'md:block hidden' }>
    {/* category  1 */}
    <div className="mt-3">
      <input onClick={()=>filterBooks("all")} type="radio" name='filter' id='demo' />
       <label htmlFor="all" className='ms-3'>All</label>

    </div>
    {/* book category */}
{
  allCategory?.map((category,index)=>(
     <div key={index} className="mt-3">
      <input onClick={()=>filterBooks(category)}  type="radio" name='filter' id={category} />
             <label htmlFor={category} className='ms-3'>{category}</label>

    </div>
  ))
}
  </div>
</div>
{/* book row */}
<div className="col-span-3">
<div  className='md:grid grid-cols-4 mt-5  md:mt-0' >
  {/* book card div 1 */}
  {
    allBooks?.length>0 ?
    allBooks?.map(book=>(
        <div key={book?._id} className='shadow  rounded p-3 mx-4 mb-5 md:mb-0 ' hidden={book?.Status!="approved"}>
    <img width={'200px'} height={'200px'} src={book?.imageURL} alt="books" />
<div className='flex justify-center items-center flex-col mt-4' >
  <h3 className='text-blue-600 font-bold text-lg' >{book?.author}</h3>
  <h4 className='text-lg text-center' >{book?.title}</h4>
  <Link to={`/books/${book?._id}/view`} className='bg-black py-2 px-5 mt-2 text-white' >View</Link>
</div>
  </div>
    ))
    :
    <p className='font-bold '>Book not found..</p>
  }


</div>

</div>

  </div>
    </>
    :
    <div className='w-full h-screen flex justify-center items-center flex-col'>
        {/* not login  book page */}
   <img className='w-100' src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="lock screen" />
   <p className='text x-l font-bold my-15' >Please <Link to={'/login'} className='underline text-blue-500' >Login </Link>to explore more </p>
    </div>
    }
    <Footer/>
    </>
  )
}

export default Books