import React from "react";
import { Route, Routes } from "react-router-dom";
import Carts from "./Carts";
import Categorys from "./category/Categorys";
import Colors from "./color/Colors";
import CreatProduct from "./product/CreatProduct";
import Products from "./product/Products";
import Sizes from "./size/Sizes";
import UpdateProduct from "./product/UpdateProduct";
import Users from "./Users";
import ProductInfor from "./product/ProductInfor";
export default function AdminIndex() {
  return (
    <div>
      <Routes>
        <Route path="/categorys" element={<Categorys/>} ></Route>
        <Route path="/products" element={<Products/>} ></Route>
        <Route path="/productDetail/:id" element={<ProductInfor/>} ></Route>
        <Route path="/createProduct" element={<CreatProduct/>} ></Route>
        <Route path="/editProduct/:id" element={<UpdateProduct/>} ></Route>
        <Route path="/colors" element={<Colors/>} ></Route>
        <Route path="/sizes" element={<Sizes/>} ></Route>
        <Route path="/carts" element={<Carts/>} ></Route>
        <Route path="/users" element={<Users/>} ></Route>
      </Routes>
    </div>
  );
}
