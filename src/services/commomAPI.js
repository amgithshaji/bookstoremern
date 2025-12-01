import axios from "axios"

const commonAPI= async (httpMethod,url,reqBody,reqHeader)=> {
const reqConfig ={
    method:httpMethod,
    url,
    data:reqBody,
    Headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
}
return await axios(reqConfig).then(res=>res).catch(err=>err)
}
export default commonAPI