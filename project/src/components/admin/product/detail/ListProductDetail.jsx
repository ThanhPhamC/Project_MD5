import React from "react";
import ProductDetail from "./ProductDetail";

export default function ListProductDetail({listProductDetail}) {
  return (
    <table
      id="example1"
      className="table table-bordered border-primary table-hover table-striped text-center"
    >
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Export Price</th>
          <th>Discount Detail</th>
          <th>Quantity</th>
          <th>Color</th>
          <th>Size</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody id="showDetail">
        {listProductDetail?.map((productDetail)=>{
          return <ProductDetail key={productDetail.id} productDetail={productDetail} />
        })}
      </tbody>
    </table>
  );
}
