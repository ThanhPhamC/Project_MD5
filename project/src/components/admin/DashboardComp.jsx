import React from "react";
import { NavLink } from "react-router-dom";

export default function DashboardComp() {
  return (
    <>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <label className="sidebar-brand">
            <span className="align-middle">
              <i className="bi bi-github"></i>&nbsp; ThanhPhamC
            </span>
          </label>
          <ul className="sidebar-nav">
            <li className="sidebar-item ">
              <NavLink className="sidebar-link" to={"/home"}>
                <i className="bi bi-box-arrow-in-up-right" />{" "}
                <span className="align-middle">Home User</span>
              </NavLink>
            </li>
            <li className="sidebar-item ">
              <NavLink className="sidebar-link">
                <i className="bi bi-x-diamond" />{" "}
                <span className="align-middle">Dashboard</span>
              </NavLink>
            </li>
            <li className="sidebar-item ">
              <NavLink className="sidebar-link" to={"/categorys"}>
                <i className="bi bi-card-checklist" />{" "}
                <span className="align-middle">Category</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink className="sidebar-link" to={"/products"}>
                <i className="bi bi-app-indicator" />{" "}
                <span className="align-middle">Product</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink className="sidebar-link" to={"/colors"}>
                <i className="bi bi-palette" />{" "}
                <span className="align-middle">Color</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink className="sidebar-link" to={"/sizes"}>
                <i className="bi bi-arrows-fullscreen" />{" "}
                <span className="align-middle">Sizes</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink className="sidebar-link" to={"/users"}>
                <i className="bi bi-person-lines-fill" />{" "}
                <span className="align-middle">User</span>
              </NavLink>
            </li>
            <li className="sidebar-item active">
              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    return "sidebar-link active" 
                  }else{ 
                    return "sidebar-link"
                  }
                }}
                to={"/carts"}
              >
                <i className="bi bi-cart-check" />{" "}
                <span className="align-middle">Cart</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
