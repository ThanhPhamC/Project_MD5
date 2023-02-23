import axios from "axios"
import { BASE_URL_PRODUCTDETAIL } from "../constants/base-url"
export const getAllProductDetailApi= async (productId)=>{
    return await axios.get(`${BASE_URL_PRODUCTDETAIL}?product.id=${productId}`)
}
export const creatProductDetailApi= async(productDetail)=>{
    return await axios.post(BASE_URL_PRODUCTDETAIL,productDetail)
}
export const updateProductDetailApi= async(productDetail)=>{
    return await axios.put(`${BASE_URL_PRODUCTDETAIL}/${productDetail.id}`,productDetail)
}
export const searchProductDetailApi= async (name)=>{
    return await axios.get(`${BASE_URL_PRODUCTDETAIL}?name_like=${name}`)
}