import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { act_saga_update_size } from "../../../saga/actionSagas/sizes";
export default function EditSize({ size }) {
  const [editSize, setEditSize] = useState(size);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleOnChange = (e) => {
    setEditSize({ ...size, id: size.id, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(act_saga_update_size(editSize));
    handleClose();
  };
  return (
    <td>
      <Button variant="outline-primary" onClick={handleShow}>
        <i className="bi bi-pencil-square" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text">Size Name&nbsp;</span>
              <input
                defaultValue={editSize.name}
                onChange={(e) => {
                  handleOnChange(e);
                }}
                name="name"
                className="form-control"
                placeholder="Enter your size's name"
              />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="sizeStatusUpdate">
                Size Status
              </label>
              <select
                className="form-select"
                name="status"
                defaultValue={editSize.status}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
            <div>
              <Button
                style={{ width: "100%" }}
                variant="primary"
                onClick={handleUpdate}
              >
                Upadte
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </td>
  );
}
