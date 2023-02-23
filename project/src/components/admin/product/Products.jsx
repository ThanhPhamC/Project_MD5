import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  act_saga_get_all_product,
  act_saga_search_product,
} from "../../../saga/actionSagas/products";
import DashboardComp from "../DashboardComp";
import FooterComp from "../FooterComp";
import HeaderComp from "../HeaderComp";
import Product from "./Product";

export default function Products() {
  const listProduct = useSelector((state) => state.listProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(act_saga_get_all_product());
  }, []);
  let element = listProduct?.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  return (
    <div>
      <div className="wrapper">
        <DashboardComp />
        <div className="main">
          <HeaderComp />
          <main className="content">
            <div className="container-fluid p-0">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">IFashion Products</h3>
                  <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                      <NavLink className="navbar-brand" to={"/createProduct"}>
                        <button type="button" className="btn btn-primary">
                          Add new Product
                        </button>
                      </NavLink>
                      <div className="d-flex" role="search">
                        <input
                          className="form-control me-2 fst-italic"
                          onChange={(e) => {
                            dispatch(act_saga_search_product(e.target.value));
                          }}
                          placeholder="Enter product's name... "
                        />
                        <button className="btn btn-outline-success">
                          Search
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
                {/* /.card-header */}
                <div
                  style={{ backgroundColor: "#f6f6f6" }}
                  className="card-body"
                >
                  <table
                    id="example1"
                    className="table table-bordered border-primary table-hover table-striped text-center"
                  >
                    <thead
                      style={{
                        backgroundColor: "#e8bc06",
                        verticalAlign: "middle",
                      }}
                    >
                      <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Created Date</th>
                        <th>Import Price</th>
                        <th>Export Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th colSpan={2}>Action</th>
                      </tr>
                    </thead>
                    <tbody id="content">{element}</tbody>
                  </table>
                </div>
                {/* /.card-body */}
                <nav aria-label="Page navigation example ">
                  <ul className="pagination float-end mx-4">
                    <li className="page-item disabled">
                      <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </main>
          <FooterComp />
        </div>
      </div>
      {/* Modal delete catalog*/}
      <div
        className="modal fade"
        id="deleteProduct"
        tabIndex={-1}
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deleteModalLabel">
                Delete Catalog
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="ProductServlet" method="post">
              <div className="modal-body">
                <input
                  style={{ width: "100%" }}
                  type="text"
                  name="deletePro"
                  id="deletePro"
                  readOnly=""
                />
                <input type="hidden" name="nameDelete" id="nameDelete" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <input className="btn btn-danger" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
