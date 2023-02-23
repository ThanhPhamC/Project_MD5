import React from 'react'
import {  useNavigate } from 'react-router-dom'
import moment from 'moment';
export default function Product({product}) {
  const navigate=useNavigate()
  const handleUpdate=()=>{
    navigate(`/editProduct/:${product.id}`,{state:product})
  }
  return (
    <tr>
    <td>
        {product.name}
    </td>
    <td>
      <img
        style={{ width: 80, height: 100 }}
        src={product.img}
        alt={product.img}
      />
    </td>
    <td>
      {moment(product.creatDate).format('DD/MM/YYYY')}
    </td>
    <td>
      {product.importPrice } vnd
    </td>
    <td>
      {product.exportPrice} vnd
    </td>
    <td>
      {product.quantity}
    </td>
    <td>
     {product.catalog.name}
    </td>
    <td>
        {product.status? "Active":"In active"}
    </td>
    <td>
        <button
          type="button" onClick={handleUpdate}
          className="btn btn-outline-primary"
        >
          <i className="bi bi-pencil-square" />
        </button>
      <button
        type="button"
        className="btn btn-outline-danger"
        data-bs-toggle="modal"
      >
        <i className="bi bi-journal-x" />
      </button>
    </td>
  </tr>
  )
}
