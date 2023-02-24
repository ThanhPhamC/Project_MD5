import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { act_saga_edit_product_detail } from "../../../../saga/actionSagas/productDetails";
export default function ProductDetail({ productDetail }) {
  const [showStatus, setShowStatus] = useState("");
  const [showStatus1, setShowStatus1] = useState("");
  const [showStatus2, setShowStatus2] = useState("");
  useEffect(()=>{
    if (productDetail.status == "true") {
        setShowStatus(productDetail.exportDetail);
        setShowStatus1(productDetail.discout);
        setShowStatus2(productDetail.quantity);
      } else {
        setShowStatus("Out Stock");
        setShowStatus1("Out Stock");
        setShowStatus2("Out Stock");
      }
  },[productDetail])
  
  const dispatch = useDispatch();
  const handleChangeStatus = () => {
    if (productDetail.status == "true") {
      productDetail.status = "false";
    } else {
      productDetail.status = "true";
    }
    dispatch(act_saga_edit_product_detail(productDetail));
  };
  return (
    <tr>
      <td>{productDetail.product.name}</td>
      <td>{showStatus}</td>
      <td>{showStatus1}</td>
      <td>{showStatus2}</td>
      <td>{productDetail.color.nameColor}</td>
      <td>{productDetail.size.name}</td>
      <td>
        {productDetail.status == "true" ? (
          <i
            onClick={handleChangeStatus}
            style={{ color: "green" }}
            class="bi bi-toggles"
          ></i>
        ) : (
          <i
            onClick={handleChangeStatus}
            style={{ color: "red" }}
            class="bi bi-toggles"
          ></i>
        )}
      </td>
    </tr>
  );
}
