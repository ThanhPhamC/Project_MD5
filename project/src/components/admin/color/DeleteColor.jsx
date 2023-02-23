import React from 'react'
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { act_saga_update_color } from '../../../saga/actionSagas/colors';
export default function DeleteColor({color}) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const dispatch = useDispatch();
    const handleDelete=()=>{
      color.status="false"
      console.log("colorcolor",color);
      dispatch (act_saga_update_color(color))
      setShow(false);
    }
  return (
    <td>
    <Button variant="outline-danger" onClick={handleShow}>
    <i className="bi bi-journal-x" />
      </Button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Catalog</Modal.Title>
      </Modal.Header>
      <Modal.Body> Xác nhận xoá "{color.nameColor}" ! </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete} >
       Delete
        </Button>
      </Modal.Footer>
    </Modal>
    </td>
  )
}
