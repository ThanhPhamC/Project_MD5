import React from 'react'
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { act_saga_update_size } from '../../../saga/actionSagas/sizes';
export default function DeleteSize({size}) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const dispatch = useDispatch();
    const handleDelete=()=>{
        size.status="false"
      dispatch (act_saga_update_size(size))
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
      <Modal.Body> Xác nhận xoá "{size.name}" ! </Modal.Body>
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
