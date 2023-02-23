import axios from "axios";
import { BASE_URL_PRODUCT  } from "../constants/base-url";
export const getAllProductApi= async (id)=>{
    id = id || ""
    return await axios.get(`${BASE_URL_PRODUCT}/${id}`)
}
export const creatProductApi= async(product)=>{
    return await axios.post(BASE_URL_PRODUCT,product)
}
export const updateProductApi= async(product)=>{
    return await axios.put(`${BASE_URL_PRODUCT}/${product.id}`,product)
}
export const searchProductApi= async (name)=>{
    return await axios.get(`${BASE_URL_PRODUCT}?name_like=${name}`)
}