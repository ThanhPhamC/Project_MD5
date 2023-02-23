import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_saga_creat_color, act_saga_get_all_color, act_saga_search_color } from "../../../saga/actionSagas/colors";
import DashboardComp from "../DashboardComp";
import FooterComp from "../FooterComp";
import HeaderComp from "../HeaderComp";
import Color from "./Color";
export default function Colors() {
  const [colorHex, setColorHex] = useState();
  const [colorName, setColorName] = useState("");
  let listColor=useSelector(state=>state.listColor)
  useEffect(()=>{
    dispatch(act_saga_get_all_color())
  },[])
  const dispatch= useDispatch()
  const handleCreatColor=()=>{
    let color={nameColor:colorName,hexColor: colorHex,status:true}
      dispatch(act_saga_creat_color(color))
      setColorName("")
  }
  return (
    <div>
      <>
        <div className="wrapper">
          <DashboardComp />
          <div className="main">
            <HeaderComp />
            <main className="content">
              <div className="container-fluid p-0">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">IFashion Colors</h3>
                    <nav className="navbar navbar-expand-lg bg-light">
                      <div className="container-fluid">
                        <div
                          className="d-flex"
                          style={{ marginTop: 15 }}
                          action="ColorServlet?action=addNewColor"
                          name="submitForm"
                          id="submitForm"
                          method="post"
                        >
                          <ul type="none" style={{ display: "inline-flex" }}>
                            <li>
                              <button
                                className="btn btn-primary" onClick={handleCreatColor}
                              >
                                Add new Color
                              </button>
                            </li>
                            <li style={{ marginLeft: 20 }}>
                              <input
                                type="color"
                                className="form-control form-control-color"
                                name="newColor"
                                id="exampleColorInput"
                                title="Choose your color" value={colorHex} onChange={(e)=>setColorHex(e.target.value)}
                              />
                            </li>
                            <li style={{ marginLeft: 20 }}>
                              <input
                                type="text "
                                className="form-control me-2 fst-italic"
                                placeholder="Enter new color name..." value={colorName} onChange={(e)=>setColorName(e.target.value)}
                              />
                            </li>
                          </ul>
                        </div>
                        <form className="d-flex" role="search">
                          <input
                            className="form-control me-2 fst-italic"
                            placeholder="Enter color name... "
                             onChange={(e)=>dispatch(act_saga_search_color(e.target.value))}
                          />
                          <button
                            className="btn btn-outline-success"
                            type="submit"
                          >
                            Search
                          </button>
                        </form>
                      </div>
                    </nav>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table
                      id="example1"
                      className="table table-bordered c table-striped text-center"
                    >
                      <thead
                        style={{
                          backgroundColor: "#e8bc06",
                          verticalAlign: "middle",
                        }}
                      >
                        <tr>
                          <th>Id</th>
                          <th>NameColor</th>
                          <th>HexColor</th>
                          <th colSpan={2}>Color</th>
                          <th>Status</th>
                          <th colSpan={2}>Action</th>
                        </tr>
                      </thead>
                      {listColor?.map((color)=>{
                        return  <Color key={color.id} color={color} />
                      })}
                     
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
      </>
    </div>
  );
}
