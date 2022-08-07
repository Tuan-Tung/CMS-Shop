import axios from "axios";
import queryString from "query-string"

const BaseInstance = axios.create({
    baseURL: "https://server-indol-nine.vercel.app/",
    headers: {
        'content-type':'application/json',
        'Authorization': ''
    },
    paramsSerializer: params => queryString.stringify(params),
})
BaseInstance.interceptors.request.use(async (config) =>{
    //hande token    
        const token = JSON.parse (localStorage.getItem("token"))
        if(token){
            config.headers.Authorization = `Bearer ${JSON.parse (localStorage.getItem("token"))}`
        }
   
    return config
})
BaseInstance.interceptors.response.use((response) =>{
    if(response && response.data){
       
        return response.data
    }
    return response
},(error) => Promise.reject(error))

export default BaseInstance