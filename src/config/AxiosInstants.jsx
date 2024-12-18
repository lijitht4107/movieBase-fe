import axios from "axios";
import { BASE_URL } from "../constants/Const";



const AxiosInstance=axios.create({
    baseURL:BASE_URL
})

AxiosInstance.interceptors.request.use(function(config){
    const token =localStorage.getItem("Token")
    config.headers["Authorization"]="Bearer "+token
    config.headers["Access-control-Allow-Origin"]="*"
    return config
})
export default AxiosInstance