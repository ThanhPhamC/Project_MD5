import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { act_saga_get_all_color } from "../../../../saga/actionSagas/colors";
import { act_saga_creat_product_detail, act_saga_edit_product_detail, act_saga_list_productDetail } from "../../../../saga/actionSagas/productDetails";
import { act_saga_get_all_size } from "../../../../saga/actionSagas/sizes";
import ListProductDetail from "./ListProductDetail";
export default function CreatProductDetail({ lastProduct }) {
  let listProductDetail = useSelector((state) => state.listProductDetail);
  let listColor = useSelector((state) => state.listColor);
  let listSize = useSelector((state) => state.listSize);
  const [sizeId, setSizeId] = useState("");
  const [colorId, setColorId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discout, setDiscount] = useState("");
  const [exportDetail, setExportDetail] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(act_saga_get_all_color());
    dispatch(act_saga_get_all_size());
    dispatch(act_saga_list_productDetail(lastProduct.id))
  }, [lastProduct]);
  const handleCreatDetail = () => {
    if (
      sizeId == "" ||
      colorId == "" ||
      quantity == "" ||
      discout == "" ||
      sizeId == "" ||
      exportDetail == ""
    ) {
      alert("khong de trong ");
      return;
    } else {
      let productDetail={
        product:lastProduct,
        color: listColor.filter(color=>color.id==colorId)[0],
        size:listSize.filter(size=>size.id==sizeId)[0],
        quantity:quantity,
        discout:discout,
        exportDetail:exportDetail,
        status:"true"
      }
        let check= false
         listProductDetail.forEach((detail) => {
          if(detail.color.id==colorId&& detail.size.id==sizeId){
            detail.quantity=parseInt(detail.quantity)+parseInt(quantity)
            dispatch(act_saga_edit_product_detail(detail))
            check=true
            return;
          }
         })
        if(!check){
          dispatch(act_saga_creat_product_detail(productDetail))
        }
    }
  };

  return (
    <div>
      <input type="hidden" id="productId" name="productId" />
      <div
        className="card-header"
        style={{
          width: "96%",
          display: "inline-flex",
          margin: 20,
          alignItems: "center",
        }}
      >
        <div style={{ width: "45%", marginTop: 20, marginLeft: 20 }}>
          <div className="input-group mb-3" style={{ display: "inline-flex" }}>
            <div className="input-group " style={{ width: "47%" }}>
              <label
                className="input-group-text btn btn-primary"
                htmlFor="inputGroupSelect02"
              >
                <i className="bi bi-aspect-ratio" />
              </label>
              <select
                className="form-select"
                onChange={(e) => setSizeId(e.target.value)}
              >
                <option>Choose size...</option>
                {listSize?.map((size) => {
                  return (
                    <option key={size.id} value={size.id}>
                      {size.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div
              className="input-group "
              style={{ width: "47%", marginLeft: "6%" }}
            >
              <label
                className="input-group-text btn btn-primary"
                htmlFor="inputGroupSelect01"
              >
                <i className="bi bi-palette" />
              </label>
              <select
                className="form-select"
                onChange={(e) => setColorId(e.target.value)}
              >
                <option>Choose color...</option>
                {listColor?.map((color) => {
                  return (
                    <option key={color.id} value={color.id}>
                      {color.nameColor}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="input-group mb-3" style={{ display: "inline-flex" }}>
            <div className="input-group " style={{ width: "47%" }}>
              <span className="input-group-text btn btn-primary">
                <i className="bi bi-cash-coin" />
              </span>
              <input
                type="text"
                onChange={(e) => setExportDetail(e.target.value)}
                className="form-control"
                placeholder="Export price..."
              />
            </div>
            <div
              className="input-group "
              style={{ width: "47%", marginLeft: "6%" }}
            >
              <span className="input-group-text btn btn-primary">
                <i className="bi bi-sort-numeric-down" />
              </span>
              <input
                onChange={(e) => setQuantity(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Quantity detail..."
              />
            </div>
          </div>
        </div>
        <div style={{ width: "45%", marginTop: 20, marginLeft: 65 }}>
          <div className="input-group mb-3">
            <span
              className="input-group-text btn btn-primary"
              id="discountDetail"
            >
              <i className="bi bi-arrow-down-right-square" />
            </span>
            <input
              type="text"
              onChange={(e) => setDiscount(e.target.value)}
              className="form-control"
              placeholder="Discount bonus..."
            />
          </div>
          <div className="input-group mb-3" style={{ display: "inline-flex" }}>
            <div className="container-fluid " style={{ width: "45%" }}>
              <button onClick={handleCreatDetail} className="btn btn-primary">
                Add product detail
              </button>
            </div>
            <div className="container-fluid " style={{ width: "45%" }}>
                <NavLink  className="btn btn-warning" to={"/products"}  >
                  View List Product
                </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderRadius: 5, margin: 20 }}>
        <ListProductDetail listProductDetail={listProductDetail}/>
      </div>
    </div>
  );
}
