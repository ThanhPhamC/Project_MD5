import axios from "axios"
import { BASE_URL_COLOR } from "../constants/base-url"
export const getAllColorApi= async (id)=>{
    id = id || ""
    return await axios.get(`${BASE_URL_COLOR}/${id}`)
}
export const creatColorApi= async(color)=>{
    return await axios.post(BASE_URL_COLOR,color)
}
export const updateColorApi= async(color)=>{
    return await axios.put(`${BASE_URL_COLOR}/${color.id}`,color)
}
export const searchColorApi= async (name)=>{
    return await axios.get(`${BASE_URL_COLOR}?nameColor_like=${name}`)
}