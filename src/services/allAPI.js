import commonAPI from "./commomAPI"
import serverURL from "./serverURL"

// register api : called but auth component when register btn is clicked
export const registerAPI = async(userDetails)=>{
return await commonAPI("POST",`${serverURL}/register`,userDetails)

}

// login api : called but auth component when login btn is clicked
export const loginAPI = async(userDetails)=>{
return await commonAPI("POST",`${serverURL}/login`,userDetails)

}
//google/sign-in google login api : called by auth component when login using google btn clicked
export const googleLoginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

//  /user/book/add  addbook api : is called in sellbook componentn whe the add book button clicked
export const addBookAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}


// books/home: homepage books api : called by home component when page is loaded
export const getHomePageBookAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/books/home`,{})
}

// books/all : bookpage Api : called by books conpontent when all books  page load - authorized users
export const getAllBooksPageAPI = async (reqHeader,searchKey)=>{
    return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
}

// user-books/all : called by book status when page load - authorised user
export const getAllUserBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

// user-books/all : called by book purchase when page load - authorised user
export const getUserBroughtBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-purchase/book`,{},reqHeader)
}

// /books/:id/view : get request from when view component
export const viewBookAPI = async (reqHeader,id)=>{
    return await commonAPI("GET",`${serverURL}/books/${id}/view`,{},reqHeader)
}

// user/:id/edit : put request by edit when update btn is clicked
export const editUserAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}
