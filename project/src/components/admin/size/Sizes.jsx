import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_saga_creat_size, act_saga_get_all_size, act_saga_search_size } from '../../../saga/actionSagas/sizes'
import DashboardComp from '../DashboardComp'
import FooterComp from '../FooterComp'
import HeaderComp from '../HeaderComp'
import Size from './Size'
export default function Sizes() {
  const listSize=useSelector(state=>state.listSize)
  const dispatch=useDispatch()
  const[size,setSize]=useState({name:"",status:"true"});
  useEffect(()=>{
    dispatch(act_saga_get_all_size())
  },[])
const handleOnchange=(e)=>{
  setSize({...size,[e.target.name]:e.target.value})
}
const handleCreatSize=()=>{
  dispatch(act_saga_creat_size(size))
  size.name=""
}
  return (
    <div><>
    <div className="wrapper">
     <DashboardComp/>
      <div className="main">
        <HeaderComp/>
        <main className="content">
          <div className="container-fluid p-0">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">IFashion List Size</h3>
                <nav className="navbar navbar-expand-lg bg-light">
                  <div className="container-fluid">
                    <div
                      className="d-flex"
                      style={{ marginTop: 15 }}
                    >
                      <ul type="none" style={{ display: "inline-flex" }}>
                        <li>
                          <button
                            className="btn btn-primary" onClick={handleCreatSize}
                          >
                            Add new Size
                          </button>
                        </li>
                        <li style={{ marginLeft: 20 }}>
                          <input
                            className="form-control me-2 fst-italic"
                            placeholder="Enter new size's name... "
                            name='name'
                            value={size.name}
                             onChange={(e)=>{handleOnchange(e)}}
                          />
                        </li>
                      </ul>
                    </div>
                    <form className="d-flex" role="search">
                      <input
                       onChange={(e)=>dispatch(act_saga_search_size(e.target.value))}
                        className="form-control me-2 fst-italic"
                        placeholder="Enter Size name... "
                      />
                      <button className="btn btn-outline-success" >
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
                  className="table table-bordered border-primary table-hover table-striped text-center"
                >
                  <thead
                    style={{
                      backgroundColor: "#e8bc06",
                      verticalAlign: "middle"
                    }}
                  >
                    <tr>
                      <th>Id</th>
                      <th>Size Name</th>
                      <th>Status</th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody id="content">
                    {listSize?.map((size)=>{
                      return  <Size key={size.id} size={size} />
                    })}
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
  </>
  </div>
  )
}
