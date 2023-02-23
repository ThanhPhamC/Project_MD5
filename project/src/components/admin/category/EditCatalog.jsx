import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { act_saga_edit_category } from "../../../saga/actionSagas/category";
export default function EditCatalog({ category, categorgyForCreat }) {
  const [catalogName, setCatalogName] = useState(category.name);
  const [description, setDescription] = useState(category.description);
  const [parentId, setParentId] = useState(category.catalogParent.id);
  const [status, setStatus] = useState(category.status);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const handleUpdate = () => {
    let catalogRoot = { id:0, name: "Root" };
    let catalogEdit = {
      id: category.id,
      name: catalogName,
      description: description,
      catalogParent:
        parentId == 0
          ? catalogRoot 
          : categorgyForCreat.filter((category) => category.id == parentId)[0],
      status: status,
    };
    dispatch(act_saga_edit_category(catalogEdit));
    handleClose()
  };
  return (
    <td>
    <Button variant="outline-primary" onClick={handleShow}>
      <i className="bi bi-pencil-square" />
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Catalog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="modal-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="updateCatalogId">
              Catalog Id &nbsp; &nbsp; &nbsp; &nbsp;
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Input catalog id"
              aria-label="Sizing example input"
              aria-describedby="inputCatalogName"
              readOnly=""
              value={category.id}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="updateCatalogName">
              Catalog Name&nbsp;
            </span>
            <input
            required
              type="text"
              className="form-control"
              placeholder="Input catalog name"
              aria-label="Sizing example input"
              aria-describedby="inputCatalogName"
              value={catalogName}
              onChange={(e) => setCatalogName(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="updateDescriptions">
              Descriptions &nbsp; &nbsp;{" "}
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Input descriptions "
              aria-label="Sizing example input"
              aria-describedby="inputDescriptions"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="updateParentGroup">
              Catalog Parent
            </label>
            <select
              className="form-select"
              value={parentId}
              onChange={(e) => setParentId(e.target.value)}
            >
              <option selected  value={0}>
                Choose...
              </option>
              {categorgyForCreat?.map((catalog) => {
                return (
                  <option key={catalog.id} value={catalog.id}>
                    {catalog.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="catalogStatusUpdate">
              Catalog Status
            </label>
            <select
              className="form-select"
              name="updateStatus"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
            <Button style={{width: "100%"}} variant="primary" onClick={handleUpdate}>
          Save Changes
        </Button>
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
