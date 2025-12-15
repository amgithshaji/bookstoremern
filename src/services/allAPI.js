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


