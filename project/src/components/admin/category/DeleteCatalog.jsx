import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { act_saga_edit_category } from "../../../saga/actionSagas/category";
export default function DeleteCatalog({ category }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleDelete = () => {
    let deleteCatalog = {
      id: category.id,
      name: category.name,
      description: category.description,
      catalogParent: category.catalogParent,
      status: "false",
    };
    dispatch(act_saga_edit_category(deleteCatalog));
    handleClose();
  };
  return (
    <td>
      <Button variant="outline-danger" onClick={handleShow}>
        <i className="bi bi-journal-x" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Catalog</Modal.Title>
        </Modal.Header>
        <Modal.Body> Xác nhận xoá "{category.name}" ! </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </td>
  );
}
