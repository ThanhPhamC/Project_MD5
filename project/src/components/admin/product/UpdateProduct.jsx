import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { storage } from "../../../ firebase";
import { act_saga_get_all_catalog } from "../../../saga/actionSagas/category";
import { act_saga_get_all_color } from "../../../saga/actionSagas/colors";
import {
  act_saga_creat_product_detail,
  act_saga_edit_product_detail,
  act_saga_list_productDetail,
} from "../../../saga/actionSagas/productDetails";
import { act_saga_update_product } from "../../../saga/actionSagas/products";
import { act_saga_get_all_size } from "../../../saga/actionSagas/sizes";
import DashboardComp from "../DashboardComp";
import FooterComp from "../FooterComp";
import ListProductDetail from "./detail/ListProductDetail";
export default function UpdateProduct() {
  let product = useLocation().state;
  let listCatalog = useSelector((state) => state.listCatalog);
  let listColor = useSelector((state) => state.listColor);
  let listSize = useSelector((state) => state.listSize);
  let listProductDetail = useSelector((state) => state.listProductDetail);
  const [sizeId, setSizeId] = useState("");
  const [colorId, setColorId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discout, setDiscount] = useState("");
  const [exportDetail, setExportDetail] = useState("");
  const [catalogId, setCatalogId] = useState(product.catalog.id);
  const [show, setShow] = useState(false);
  const [showUpdate, setshowUpdate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(act_saga_get_all_catalog());
    dispatch(act_saga_get_all_color());
    dispatch(act_saga_get_all_size());
    dispatch(act_saga_list_productDetail(product.id));
  }, []);
  const [productUpdate, setProductUpdate] = useState(product);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageSubUpload, setImageSubUpload] = useState(null);
  const uploadproductImg = () => {
    productUpdate.subImg=[]
    for (let i = 0; i < imageSubUpload.length; i++) {
      const imageRef = ref(storage, `images/${imageSubUpload[i].name}`);
      uploadBytes(imageRef, imageSubUpload[i]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          productUpdate.subImg.push(url);
          setShow(true);
          setshowUpdate("");
        });
      });
    }
    if (imageUpload == null || imageSubUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        productUpdate.img = url;
      });
    });
  };
  let creats = listCatalog?.filter((cat) => {
    let check = false;
    listCatalog?.forEach((cata) => {
      if (cata.catalogParent.id == cat.id && cat.status == "true") {
        check = true;
      }
    });
    if (!check) return cat;
  });
  const handleOnchange = (e) => {
    setProductUpdate({ ...productUpdate, [e.target.name]: e.target.value });
  };
  // handle update product
  const handleUpdate = () => {
    productUpdate.catalog = creats.filter((catalog) => catalog.id == catalogId)[0];
    dispatch(act_saga_update_product(productUpdate))
    setShow(false);
    setshowUpdate("Success !!!");
  };
  const handleViewDetail = () => {
    navigate(`/productDetail/:${product.id}`, { state: product });
  };
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
      let productDetail = {
        product: productUpdate,
        color: listColor.filter((color) => color.id == colorId)[0],
        size: listSize.filter((size) => size.id == sizeId)[0],
        quantity: quantity,
        discout: discout,
        exportDetail: exportDetail,
        status: "true",
      };
      let check = false;
      listProductDetail.forEach((detail) => {
        if (detail.color.id == colorId && detail.size.id == sizeId) {
          detail.quantity = parseInt(detail.quantity) + parseInt(quantity);
          detail.discount = discout;
          detail.exportDetail = exportDetail;
          dispatch(act_saga_edit_product_detail(detail));
          check = true;
          return;
        }
      });
      if (!check) {
        dispatch(act_saga_creat_product_detail(productDetail));
      }
    }
  };
  return (
    <div>
      <div className="wrapper">
        <DashboardComp />
        <div className="main">
          <main className="content">
            <div className="container-fluid p-0">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Update Product</h3>
                  <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                      <div className="d-flex">
                        <button
                          className="btn btn-outline-success"
                          onClick={handleViewDetail}
                        >
                          View Product Detail
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
                <section className="product-details spad">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="product__details__pic">
                          <div className="product__details__pic__left product__thumb nice-scroll">
                            <div>
                              <img
                                style={{ width: "90%", marginTop: "50px" }}
                                src={product.img}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6" style={{ marginTop: "30px" }}>
                        <div className="product__details__text">
                          <div className="container-fluid p-0">
                            <div className="card">
                              <div
                                style={{
                                  width: "100%",
                                  display: "inline-flex",
                                  alignItems: "center",
                                }}
                              >
                                <div
                                  style={{
                                    width: "90%",
                                    marginTop: 20,
                                    marginLeft: 20,
                                  }}
                                >
                                  <div className="input-group mb-3 ">
                                    <span
                                      className="input-group-text btn btn-primary"
                                      id="newProductName"
                                    >
                                      <i className="bi bi-pencil" />
                                    </span>
                                    <input
                                      type="text"
                                      name="name"
                                      value={productUpdate.name}
                                      onChange={(e) => handleOnchange(e)}
                                      className="form-control"
                                      placeholder="Product name..."
                                    />
                                  </div>
                                  <div className="input-group mb-3">
                                    <label
                                      className="input-group-text btn btn-primary"
                                      htmlFor="idParent"
                                    >
                                      <i className="bi bi-list-check" />
                                    </label>
                                    <select onChange={(e)=>setCatalogId(e.target.value)}
                                      className="form-select"
                                      value={catalogId}
                                    >
                                      <option value={0}>
                                        Choose Catalog...
                                      </option>
                                      {creats?.map((catalog) => {
                                        return (
                                          <option
                                            key={catalog.id}
                                            value={catalog.id}
                                          >
                                            {" "}
                                            [{catalog.catalogParent.name}]:{" "}
                                            {catalog.name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </div>
                                  <div className="input-group mb-3">
                                    <span
                                      className="input-group-text btn btn-primary"
                                      id="newProductTitle"
                                    >
                                      <i className="bi bi-tags" />
                                    </span>
                                    <input
                                      name="title"
                                      value={productUpdate.title}
                                      onChange={(e) => handleOnchange(e)}
                                      type="text"
                                      className="form-control"
                                      placeholder="Product Title..."
                                    />
                                  </div>
                                  <div className="input-group mb-3">
                                    <span
                                      className="input-group-text btn btn-primary"
                                      id="createdDate"
                                    >
                                      <i className="bi bi-calendar2-check" />
                                    </span>
                                    <input
                                      type="date"
                                      name="creatDate"
                                      value={productUpdate.creatDate}
                                      onChange={(e) => handleOnchange(e)}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="input-group mb-3">
                                    <span
                                      className="input-group-text btn btn-primary"
                                      id="importPrice"
                                    >
                                      <i className="bi bi-cash-coin" />
                                    </span>
                                    <input
                                    name="importPrice"
                                      value={productUpdate.importPrice} onChange={(e)=>handleOnchange(e)}
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter import price product... "
                                    />
                                  </div>
                                  <div
                                    className="input-group mb-3"
                                    style={{ display: "inline-flex" }}
                                  >
                                    <div
                                      className="input-group "
                                      style={{ width: "47%" }}
                                    >
                                      <span className="input-group-text  btn btn-primary">
                                        <i className="bi bi-arrow-down-right-square" />
                                      </span>
                                      <input
                                        value={productUpdate.discount} name="discount"
                                        type="text" onChange={(e)=>handleOnchange(e)}
                                        className="form-control"
                                        placeholder="Discount..."
                                      />
                                    </div>
                                    <div
                                      className="input-group "
                                      style={{
                                        width: "47%",
                                        marginLeft: "6%",
                                      }}
                                    >
                                      <span className="input-group-text  btn btn-primary ">
                                        <i className="bi bi-toggles" />
                                      </span>
                                      <select name="status" onChange={(e)=>handleOnchange(e)}
                                        className="form-control"
                                        value={productUpdate.status}
                                      >
                                        <option>Choice Status...</option>
                                        <option value="true">Active</option>
                                        <option value="false">In active</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="input-group mb-3">
                                    <span
                                      className="input-group-text btn btn-primary"
                                      id="file1"
                                    >
                                      <i className="bi bi-newspaper" />
                                    </span>
                                    <input
                                      type="text" onChange={(e)=>handleOnchange(e)}
                                      name="description" value={productUpdate.description}
                                      className="form-control"
                                      placeholder="Description..."
                                    />
                                  </div>
                                  <div
                                    className="input-group mb-3"
                                    style={{ display: "inline-flex" }}
                                  >
                                    <div
                                      className="input-group "
                                      style={{ width: "60%" }}
                                    >
                                      <span className="input-group-text btn btn-primary">
                                        <i className="bi bi-images" />
                                      </span>
                                      <input
                                        style={{}}
                                        onChange={(e) =>
                                          setImageUpload(e.target.files[0])
                                        }
                                        type="file"
                                        className="form-control"
                                      />
                                    </div>
                                    <div
                                      className="input-group "
                                      style={{
                                        width: "32%",
                                        marginLeft: "6%",
                                      }}
                                    >
                                      {show ? (
                                        <i
                                          style={{
                                            width: "20%",
                                            fontSize: "25px",
                                            color: "green",
                                          }}
                                          className=" bi bi-check-circle-fill"
                                        ></i>
                                      ) : (
                                        <button
                                          className="btn btn-warning"
                                          onClick={uploadproductImg}
                                        >
                                          Load Image
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                  <div
                                    className="input-group mb-3"
                                    style={{ display: "inline-flex" }}
                                  >
                                    <div
                                      className="input-group "
                                      style={{ width: "60%" }}
                                    >
                                      <span className="input-group-text btn btn-primary">
                                        <i className="bi bi-images" />
                                      </span>
                                      <input
                                        multiple
                                        type="file"
                                        onChange={(e) =>
                                          setImageSubUpload(e.target.files)
                                        }
                                        className="form-control"
                                      />
                                    </div>
                                    <div
                                      className="input-group "
                                      style={{
                                        width: "33%",
                                        marginLeft: "6%",
                                      }}
                                    >
                                      {show ? (
                                        <button
                                          className="btn btn-warning"
                                          onClick={handleUpdate}
                                        >
                                          Update Product
                                        </button>
                                      ) : (
                                        ""
                                      )}
                                      {showUpdate}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <input type="hidden" name="productId" />
                        <div
                          className="card-header"
                          style={{
                            display: "inline-flex",
                            marginBottom: 20,
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              width: "45%",
                              marginTop: 20,
                              marginLeft: 20,
                            }}
                          >
                            <div
                              className="input-group mb-3"
                              style={{ display: "inline-flex" }}
                            >
                              <div
                                className="input-group "
                                style={{ width: "47%" }}
                              >
                                <label
                                  className="input-group-text"
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
                                  className="input-group-text"
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
                            <div
                              className="input-group mb-3"
                              style={{ display: "inline-flex" }}
                            >
                              <div
                                className="input-group "
                                style={{ width: "47%" }}
                              >
                                <span className="input-group-text">
                                  <i className="bi bi-cash-coin" />
                                </span>
                                <input
                                  type="text"
                                  onChange={(e) =>
                                    setExportDetail(e.target.value)
                                  }
                                  className="form-control"
                                  placeholder="Export price..."
                                />
                              </div>
                              <div
                                className="input-group "
                                style={{ width: "47%", marginLeft: "6%" }}
                              >
                                <span className="input-group-text">
                                  <i className="bi bi-sort-numeric-down" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Quantity detail..."
                                  onChange={(e) => setQuantity(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              width: "50%",
                              marginTop: 20,
                              marginLeft: 65,
                            }}
                          >
                            <div className="input-group mb-3">
                              <span
                                className="input-group-text"
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
                            <div
                              className="input-group mb-3"
                              style={{ display: "inline-flex" }}
                            >
                              <div
                                className="container-fluid "
                                style={{ width: "45%" }}
                              >
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  onClick={handleCreatDetail}
                                >
                                  Update orr Add Detail
                                </button>
                              </div>
                              <div
                                className="container-fluid "
                                style={{ width: "45%" }}
                              >
                                <Link to={"/products"}>
                                  <button
                                    type="button"
                                    className="btn btn-success"
                                  >
                                    Back to list Product
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="content">
                          <div style={{ borderRadius: 5 }}>
                            <ListProductDetail
                              listProductDetail={listProductDetail}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
          <FooterComp />
        </div>
      </div>
    </div>
  );
}
