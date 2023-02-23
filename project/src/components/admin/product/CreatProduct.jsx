import React from "react";
import { useState } from "react";
import DashboardComp from "../DashboardComp";
import FooterComp from "../FooterComp";
import HeaderComp from "../HeaderComp";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { act_saga_get_all_catalog } from "../../../saga/actionSagas/category";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../ firebase";
import Button from "react-bootstrap/esm/Button";
import { act_saga_creat_product, act_saga_last_product } from "../../../saga/actionSagas/products";
import CreatProductDetail from "./detail/CreatProductDetail";
export default function CreatProduct() {
  let listCatalog = useSelector((state) => state.listCatalog);
  let lastProduct=useSelector(state=>state.productLast)
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    img: "",
    subImg: [],
    creatDate: "",
    importPrice: 0,
    exportPrice: 0,
    discount: 0,
    quantity: 0,
    catalog: {},
    description: "",
    status: "true",
    title: "",
  });
  const [ckeditor, setCkeditor] = useState("");
  const [catalogId, setCatalogId] = useState(0);
  const [showAddDetail, setShowAddDetail] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageSubUpload, setImageSubUpload] = useState(null);
  const [alert, setAlert] = useState(false);
  const [alertSub, setAlertSub] = useState(false);
  const [reCall,setRecall]=useState(true)
  useEffect(() => {
    dispatch(act_saga_get_all_catalog());
    dispatch(act_saga_last_product())
  }, [reCall]);
  let creats = listCatalog?.filter((cat) => {
    let check = false;
    listCatalog?.forEach((cata) => {
      if (cata.catalogParent.id == cat.id && cat.status == "true") {
        check = true;
      }
    });
    if (!check) return cat;
  });
  const uploadproductImg = () => {
    if (imageUpload == null || imageSubUpload == null) return;
    for (let i = 0; i < imageSubUpload.length; i++) {
      const imageRef = ref(storage, `images/${imageSubUpload[i].name}`);
      uploadBytes(imageRef, imageSubUpload[i]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          product.subImg.push(url);
        });
        setAlertSub(true);
      });
    }
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setAlert(true);
        product.img = url;
      });
    });
  };
  const handleOnchange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleCreatProduct = () => {
    product.catalog = creats.filter((catalog) => catalog.id == catalogId)[0];
    product.description = ckeditor.slice(4, ckeditor.length - 4);
    dispatch(act_saga_creat_product(product));
    setShowAddDetail(true);
    setRecall(!reCall)
  };
  const handleSetvalue=()=>{
    setAlert(false)
    setAlertSub(false)
    setShowAddDetail(false)
    setProduct({
      name: "",
      img: "",
      subImg: [],
      creatDate: "",
      importPrice: 0,
      exportPrice: 0,
      discount: 0,
      quantity: 0,
      catalog: {},
      description: "",
      status: "true",
      title: "",
    })
  }
  return (
    <div>
      <div className="wrapper">
        <DashboardComp />
        <div className="main">
          <HeaderComp />
          <main className="content">
            <div className="container-fluid p-0">
              <div className="card">
                <div>
                  <div className="card-header">
                    <div className="container-fluid">
                      <button
                        className="btn btn-primary"
                        onClick={handleCreatProduct}
                      >
                        Add new Product
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{ width: "45%", marginTop: 20, marginLeft: 20 }}
                    >
                      <div className="input-group mb-3">
                        <span className="input-group-text btn btn-primary">
                          <i className="bi bi-pencil" />
                        </span>
                        <input
                          defaultValue={product.name}
                          type="text"
                          name="name"
                          onChange={(e) => {
                            handleOnchange(e);
                          }}
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
                        <select
                          defaultValue={0}
                          className="form-select"
                          onChange={(e) => setCatalogId(e.target.value)}
                        >
                          <option value={0}>Choose Catalog...</option>
                          {creats?.map((catalog) => {
                            return (
                              <option key={catalog.id} value={catalog.id}>
                                {" "}
                                [{catalog.catalogParent.name}]: {catalog.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="input-group mb-3">
                        <span
                          className="input-group-text btn btn-primary"
                          id="title"
                        >
                          <i className="bi bi-tags" />
                        </span>
                        <input
                          style={{}}
                          defaultValue={product.title}
                          type="text"
                          name="title"
                          onChange={(e) => {
                            handleOnchange(e);
                          }}
                          className="form-control"
                          placeholder="Product Title..."
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span
                          className="input-group-text btn btn-primary"
                          id="file1"
                        >
                          <i className="bi bi-images" />
                        </span>
                        <input
                          onChange={(e) => setImageUpload(e.target.files[0])}
                          type="file"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <Button
                          style={{ width: "28%" }}
                          variant="primary"
                          onClick={uploadproductImg}
                        >
                          Upload File
                        </Button>
                        {alert ? (
                          <i
                            style={{
                              width: "20%",
                              fontSize: "30px",
                              color: "green",
                            }}
                            className=" bi bi-check-circle-fill"
                          ></i>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div
                      style={{ width: "45%", marginTop: 20, marginLeft: 65 }}
                    >
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
                          onChange={(e) => {
                            handleOnchange(e);
                          }}
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
                          type="text"
                          name="importPrice"
                          onChange={(e) => {
                            handleOnchange(e);
                          }}
                          className="form-control"
                          placeholder="Enter import price product... "
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span
                          className="input-group-text btn btn-primary"
                          id="discount"
                        >
                          <i className="bi bi-arrow-down-right-square" />
                        </span>
                        <input
                          style={{}}
                          type="text"
                          name="discount"
                          onChange={(e) => {
                            handleOnchange(e);
                          }}
                          className="form-control"
                          placeholder="Discount..."
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span
                          className="input-group-text btn btn-primary"
                          id="file"
                        >
                          <i className="bi bi-images" />
                        </span>
                        <input
                          multiple
                          type="file"
                          onChange={(e) => setImageSubUpload(e.target.files)}
                          className="form-control"
                          aria-label="Sizing example input"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <Button style={{ width: "28%" }} variant="primary">
                          Sub Img
                        </Button>
                        {alertSub ? (
                          <i
                            style={{
                              width: "20%",
                              fontSize: "30px",
                              color: "green",
                            }}
                            className=" bi bi-check-circle-fill"
                          ></i>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div style={{ borderRadius: 5, margin: 20 }} name="">
                    <CKEditor
                      name="description"
                      editor={ClassicEditor}
                      onChange={(event, editor) => {
                        setCkeditor(editor.getData());
                      }}
                    />
                  </div>
                </div>
                {showAddDetail? <CreatProductDetail  lastProduct={lastProduct} handleSetvalue={handleSetvalue} /> : ""}
              </div>
              {/* /.card-body */}
            </div>
          </main>
          <FooterComp />
        </div>
      </div>
    </div>
  );
}
