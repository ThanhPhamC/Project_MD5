import React from 'react'
import DashboardComp from './DashboardComp'
import FooterComp from './FooterComp'
import HeaderComp from './HeaderComp'

export default function Users() {
  return (
    <div>
    <div className="wrapper">
     <DashboardComp/>
      <div className="main">
        <HeaderComp/>
        <main className="content">
          <div className="container-fluid p-0">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">IFashion Users</h3>
                <nav className="navbar navbar-expand-lg bg-light">
                  <div className="container-fluid">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2 fst-italic"
                        type="search"
                        placeholder="Enter user's name... "
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
                  className="table table-bordered table-striped text-center"
                >
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>Date of birth</th>
                      <th>Gender</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Lock/Unlock</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
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
                        {" "}
                        <button
                          type="button"
                          id="delete"
                          className="btn btn-outline-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#lockAndUnlock"
                        >
                          <i className="bi bi-toggles" />
                          <input
                            type="hidden"
                            id="userId"
                          />
                          <input
                            type="hidden"
                            id="userName"
                          />
                        </button>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
              {/* /.card-body */}
            </div>
          </div>
        </main>
        <FooterComp/>
      </div>
    </div>
    {/* Modal delete catalog*/}
    <div
      className="modal fade"
      id="lockAndUnlock"
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
          <form action="UserServlet" method="post">
            <div className="modal-body">
              <input
                style={{ width: "100%" }}
                type="text"
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
              <input
                className="btn btn-danger"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

