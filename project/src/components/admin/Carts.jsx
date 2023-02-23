import React from 'react'
import DashboardComp from './DashboardComp'
import FooterComp from './FooterComp'
import HeaderComp from './HeaderComp'

export default function Carts() {
  return (
    <div><div className="wrapper">
    <DashboardComp/>
    <div className="main">
     <HeaderComp/>
      <main className="content">
        <div className="container-fluid p-0">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">IFashion Carts</h3>
              <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <div className="d-flex" style={{ marginTop: 15 }}>
                    <ul type="none" style={{ display: "inline-flex" }}>
                      <li>
                        <button
                          value={1}
                          onclick="updateStatus(this)"
                          type="submit"
                          name="Creat"
                          className="btn btn-primary"
                        >
                          Confirm(20)
                        </button>
                      </li>
                      <li>
                        <button
                          value={2}
                          onclick="updateStatus(this)"
                          type="submit"
                          name="Creat"
                          className="btn btn-warning"
                        >
                          {" "}
                          In progress(50)
                        </button>
                      </li>
                      <li>
                        <button
                          value={3}
                          onclick="updateStatus(this)"
                          type="submit"
                          name="Creat"
                          className="btn btn-info"
                        >
                          Complain(3)
                        </button>
                      </li>
                      <li>
                        <a type="submit" name="Creat" className="btn btn-success">
                          {" "}
                          Done(628)
                        </a>
                      </li>
                      <li>
                        <a type="submit" name="Creat" className="btn btn-danger">
                          
                          Cancelled(0)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2 fst-italic"
                      oninput="searchByName(this)"
                      name="searchColor"
                      type="text"
                      placeholder="Enter cart name... "
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
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
                  style={{ backgroundColor: "#e8bc06", verticalAlign: "middle" }}
                >
                  <tr>
                    <th>Code tracking</th>
                    <th>User oder</th>
                    <th>Date created</th>
                    <th>Receiving address</th>
                    <th>Phone number</th>
                    <th>Total amount</th>
                    <th>Assignee</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody id="content">
                  <tr style={{ color: "black" }}>
                    <td>
                      
                    </td>
                    <td>
                      
                    </td>
                    <td>
                     
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                      <button
                        value="${cart.cartStatus}"
                        className=" btn ${cart.cartStatus==1?'btn-primary':cart.cartStatus==2?'btn-warning'
                                :cart.cartStatus==3?'btn-success':cart.cartStatus==4?'btn-danger':'btn-info'} "
                      >
                      </button>
                    </td>
                  </tr>
                </tbody>
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
      <FooterComp/>
    </div>
  </div>
  </div>
  )
}
