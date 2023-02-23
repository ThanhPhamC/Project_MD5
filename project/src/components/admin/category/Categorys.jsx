import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  act_saga_creat_category,
  act_saga_get_all_catalog,
  act_saga_get_catalog_for_creat,
  act_saga_search_category,
} from "../../../saga/actionSagas/category";
import Category from "./Category";
import DashboardComp from "../DashboardComp";
import FooterComp from "../FooterComp";
import HeaderComp from "../HeaderComp";
export default function Categorys() {
  const categorys = useSelector((state) => state.listCatalog);
  const categorgyForCreat = useSelector((state) => state.catalogForCreats);
  const [catalogName, setCatalogName] = useState("");
  const [description, setDescription] = useState("");
  // const [reCall, setReCall] = useState(true);
  const [parentId, setParentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(act_saga_get_all_catalog());
    dispatch(act_saga_get_catalog_for_creat());
  }, []);
  let elementCategory = categorys.map((category) => {
    return (
      <Category
        key={category.id}
        category={category}
        categorgyForCreat={categorgyForCreat}
      />
    );
  });
  const handleCreat = () => {
    let catalogRoot = {id:0, name: "Root" };
    let newCatalog = {
      name: catalogName,
      description: description,
      status: "true",
      catalogParent:
        parentId == 0
          ?  catalogRoot 
          : categorys.filter((category) => category.id == parentId)[0],
    };
    dispatch(act_saga_creat_category(newCatalog));
    setCatalogName("");
    setDescription("");
    setParentId(0);
  };
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
                  <h3 className="card-title">IFashion Categorys</h3>
                  <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#newCatalogModal" onClick={()=>dispatch(act_saga_get_catalog_for_creat())}
                      >
                        Add new Category
                      </button>
                      <div className="d-flex" role="search" >
                        <input
                          className="form-control me-2 fst-italic"
                          placeholder="Enter category's name... "
                          aria-label="Search"  onChange={(e)=>{dispatch(act_saga_search_category(e.target.value))}}
                        />
                        <button
                          className="btn btn-outline-success"
                         
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped border-primary table-hover table-striped text-center"
                  >
                    <thead
                      style={{
                        backgroundColor: "#e8bc06",
                        verticalAlign: "middle",
                      }}
                    >
                      <tr>
                        <th> ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Parent Name</th>
                        <th>Status</th>
                        <th colSpan={2}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>{elementCategory}</tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation example ">
                  <ul className="pagination float-end mx-4">
                    <li className="page-item disabled">
                      <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item active">
                      <button className="page-link" >
                        1
                      </button>
                    </li>
                    <li className="page-item">
                      <button className="page-link" >
                        2
                      </button>
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
                {/* /.card-body */}
                {/* Modal creat new catalog */}
                <div
                  className="modal fade"
                  id="newCatalogModal"
                  tabIndex={-1}
                  aria-labelledby="newCatalogLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="newCatalogLabel">
                          Creat New
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div className="input-group mb-3">
                          <span
                            className="input-group-text"
                            id="newCatalogName"
                          >
                            Catalog Name&nbsp;
                          </span>
                          <input
                            required
                            type="text"
                            name="newCatalogName"
                            className="form-control"
                            placeholder="Input catalog name"
                            aria-label="Sizing example input"
                            value={catalogName}
                            aria-describedby="inputCatalogName"
                            onChange={(e) => setCatalogName(e.target.value)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span
                            className="input-group-text"
                            id="newDescriptions"
                          >
                            Descriptions &nbsp; &nbsp;{" "}
                          </span>
                          <input
                            type="text"
                            name="newDescriptions"
                            className="form-control"
                            placeholder="Input descriptions "
                            aria-label="Sizing example input"
                            aria-describedby="inputDescriptions"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-text"
                            htmlFor="inputGroupSelect01"
                          >
                            Catalog Parent
                          </label>
                          <select
                            className="form-select"
                            name="newCatalogParent"
                            id="inputGroupSelect01"
                            onChange={(e) => setParentId(e.target.value)}
                          >
                            <option value={0}>Choose this for Root</option>
                            {categorgyForCreat?.map((catalog) => {
                              return (
                                <option key={catalog.id} value={catalog.id}>
                                  {catalog.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          data-bs-dismiss="modal"
                          className="btn btn-primary"
                          onClick={handleCreat}
                        >
                          Creat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <FooterComp />
        </div>
      </div>
    </div>
  );
}
