import axios from "axios";
import {  BASE_URL_CATEGORY } from "../constants/base-url";
export const getAllCatalogAPI = async () => {
  return await axios.get(`${BASE_URL_CATEGORY}`)
};
export const creatCatalogAPI= async (catalog)=>{
  return await axios.post(BASE_URL_CATEGORY,catalog)
}
export const updateCatalogAPI= async(id,catalog)=>{
  return await axios.put(`${BASE_URL_CATEGORY}/${id}`,catalog)
}
export const searchCatalogAPI= async(catalogName)=>{
  return await axios.get(`${BASE_URL_CATEGORY}?name_like=${catalogName}`)
}