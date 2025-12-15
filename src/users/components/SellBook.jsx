import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { addBookAPI } from '../../services/allAPI';


function SellBook() {
   const [bookDetails, setBookDetails] = useState({
      title: "", author: "", pages: "", price: "", discountPrice: "", imageURL: "", abstract: "", language: "", publisher: "", isbn: "", category: "", uploadImages:[]

   })

   const [preview,setPreview] = useState("")
   const [previewList,setPreviewList] = useState([])
   console.log(bookDetails);
   const handleUploadBookImage = (e)=>{
      // get file which upload
      console.log(e.target.files[0]);
      // 
      const imgFileArray = bookDetails.uploadImages
      imgFileArray.push(e.target.files[0])
      setBookDetails({...bookDetails,uploadImages:imgFileArray})
      // consvert
      const url = URL.createObjectURL(e.target.files[0])
      console.log(url);
      setPreview(url)
      const bookImagesArray = previewList
      bookImagesArray.push(url)
      setPreviewList(bookImagesArray)

   }

const handleUploadBook = async ()=>{
   const {title,author,pages,price,discountPrice,imageURL,abstract,language,publisher,isbn,category,uploadImages} = bookDetails
   if (!title || !author || !pages || !price || !discountPrice || !imageURL || !abstract || !language || !publisher || !isbn || !category || uploadImages.length==0) {
      toast.info("please fill the form completly")
   }else{
      // api call
      const token = sessionStorage.getItem("token")
      if (token) {
         const reqHeader = {
            "Authorization" : `Bearer ${token}`
         }
         const reqBody = new FormData()
         for(let key in bookDetails){
            if (key != "uploadImages") {
               reqBody.append(key,bookDetails[key])
            }else{
               bookDetails.uploadImages.forEach(imgFile=>{
                  reqBody.append("uploadImages,imgfile")
               })

            }
         }
         const result = await addBookAPI(reqBody,reqHeader)
         console.log(result);
         if (result.status==200) {
            toast.success("Book Added successfully")
         }else if (result.status==401) {
            toast.warning(result.response.data)
            
         }else{
            toast.error("something went wrong")
         }
         resetUploadBookForm()
         
      }
   }
}


   const resetUploadBookForm = ()=>{
setBookDetails({  title: "", author: "", pages: "", price: "", discountPrice: "", imageURL: "", abstract: "", language: "", publisher: "", isbn: "", category: "", uploadImages:[]})
setPreview("")
setPreviewList([])
   }
   

   

   return (
      <div>
         <div className="p-10 my-20 mx-5 bg-gray-200">
            <h1 className='text-center text-3xl font-bold' >Book Details</h1>
            <div className='md:grid grid-cols-2 mt-10 w-full'>
               <div className="px-3">
                  <div className="mb-3">
                     <input value={bookDetails.title} onChange={e => setBookDetails({...bookDetails, title: e.target.value })} type="text" placeholder='Book Title' className='p-2 bg-white w-full rounded' />
                  </div>
                  <div className="mb-3">
                     <input value={bookDetails.author} onChange={e => setBookDetails({...bookDetails, author: e.target.value })} type="text" placeholder='Author' className='p-2 bg-white w-full rounded' />
                  </div>
                  <div className="mb-3">
                     <input value={bookDetails.pages} onChange={e => setBookDetails({...bookDetails, pages: e.target.value })} type="text" placeholder='No: of Pages' className='p-2 bg-white w-full rounded' />
                  </div>
                  <div className="mb-3">
                     <input value={bookDetails.imageURL} onChange={e => setBookDetails({...bookDetails, imageURL: e.target.value })} type="text" placeholder='Image URL' className='p-2 bg-white w-full rounded' />
                  </div>
                  <div className="mb-3">
                     <input value={bookDetails.price} onChange={e => setBookDetails({...bookDetails, price: e.target.value })} type="text" placeholder='Price' className='p-2 bg-white w-full rounded' />
                  </div>
                  <div className="mb-3">
                     <input value={bookDetails.discountPrice} onChange={e => setBookDetails({...bookDetails, discountPrice: e.target.value })} type="text" placeholder='Discount Price' className='p-2 bg-white w-full rounded' />
                  </div>


                  <div className="mb-3">
                     <textarea value={bookDetails.abstract} onChange={e => setBookDetails({...bookDetails, abstract: e.target.value })}   type="text" rows={(5)} placeholder='Book Abstract' className='p-2  bg-white w-full rounded' />
                  </div>

               </div>
               <div className="px-3">
                  <div className="mb-3">
                     <input value={bookDetails.publisher} onChange={e => setBookDetails({...bookDetails, publisher: e.target.value })}  type="text" placeholder='Publisher' className='p-2 bg-white w-full rounded' />
                  </div>
                  <div className="mb-3">
                     <input value={bookDetails.language} onChange={e => setBookDetails({...bookDetails, language: e.target.value })}  type="text" placeholder='Language' className='p-2 bg-white w-full rounded' />
                  </div>

                  <div className="mb-3">
                     <input value={bookDetails.isbn} onChange={e => setBookDetails({...bookDetails, isbn: e.target.value })}  type="text" placeholder='ISBN' className='p-2 bg-white w-full rounded' />
                  </div>
                  <div className="mb-3">
                     <input value={bookDetails.category} onChange={e => setBookDetails({...bookDetails, category: e.target.value })}  type="text" placeholder='Category' className='p-2 bg-white w-full rounded' />
                  </div>
                  <div className="flex justify-center mt-10">

                     <label htmlFor="uploading">
                        <input onChange={e=>handleUploadBookImage(e)} type="file" id='uploading' hidden />
                        <img width={"200px"} src={preview?preview:"https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"} alt="upload img" />
                     </label>
                  </div>
                     {/* for more img upload */}
                     {
                        preview &&
                        <div className='flex justify-center items-center' >
                          {/* uploading img */}
                       {
                        previewList?.map((bookImagesURL,index)=>(
                         <img key={index} width={'70px'} height={'70px'}className='mx-3' src={bookImagesURL} alt="upload img" />
                        ))
                       }
                         {/* add more file upload button */}
                         {
                           previewList.length<3 &&
                         <label htmlFor="bookImages" className='flex items-center' >
                           <input onChange={e=>handleUploadBookImage(e)}  type="file" id='bookImages' hidden />
                           <FaPlus className='text-3xl ms-3'/>
                         </label>
                     }
                        </div>
                     }
               </div>
            </div>
            <div className='flex justify-end mt-5'>
               <button onClick={resetUploadBookForm} className='bg-gray-600 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-400'>RESET</button>
               <button onClick={handleUploadBook} className='bg-blue-600 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-400'>ADD BOOKS</button>

            </div>
         </div>
           {/* toast container */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"
      />
      </div>
   )
}

export default SellBook