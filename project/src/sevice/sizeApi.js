import axios from "axios"
import { BASE_URL_SIZE } from "../constants/base-url"
export const getAllSizeApi= async ()=>{
    return await axios.get(BASE_URL_SIZE)
}
export const creatSizeApi= async(size)=>{
    return await axios.post(BASE_URL_SIZE,size)
}
export const updateSizeApi= async(size)=>{
    return await axios.put(`${BASE_URL_SIZE}/${size.id}`,size)
}
export const searchSizeApi= async (name)=>{
    return await axios.get(`${BASE_URL_SIZE}?name_like=${name}`)
}