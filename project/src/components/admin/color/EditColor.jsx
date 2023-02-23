import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { act_saga_update_color } from "../../../saga/actionSagas/colors";
export default function EditColor({ color }) {
  const [colorHex, setColorHex] = useState(color.hexColor);
  const [colorName, setColorName] = useState(color.nameColor);
  const [statusColor,setSatusColor]=useState(color.status)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const handleUpdate=()=>{
    let editColor={
        id:color.id,
        nameColor:colorName,
        hexColor:colorHex,
        status:statusColor
    }
    console.log("editColor",editColor);
    dispatch(act_saga_update_color(editColor))
    handleClose()
  }
  return (
    <td>
      <Button variant="outline-primary" onClick={handleShow}>
        <i className="bi bi-pencil-square" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <table className="table table-bordered table-striped text-center">
              <tbody>
                <tr>
                  <td>
                    <label className="input-group-text" htmlFor="oldC">
                      Old Color
                    </label>
                  </td>
                  <td>
                    <label className="input-group-text" htmlFor="updateCol">
                      New Color
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i
                      style={{ fontSize: 40, color: `${color.hexColor}` }}
                      className="bi bi-patch-check-fill"
                    />
                  </td>
                  <td>
                    <input
                      
                      style={{
                        border: "none",
                        height: 40,
                        borderCollapse: "collapse",
                      }}
                      type="color"
                      value={colorHex} onChange={(e)=>setColorHex(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Color Name&nbsp;</span>
                      <input
                        defaultValue={colorName} onChange={(e)=>setColorName(e.target.value)}
                        type="text"
                        id="newColorName"
                        name="newColorName"
                        className="form-control"
                        placeholder="Enter new color name..."
                        aria-label="Sizing example input"
                        aria-describedby="newColorName"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div className="input-group mb-3">
                      <label
                        className="input-group-text"
                        htmlFor="colorStatusUpdate"
                      >
                        Color Status
                      </label>
                      <select
                        className="form-select"
                        id="colorStatusUpdate"
                        name="updateStatus"
                        value={statusColor} onChange={(e)=>setSatusColor(e.target.value)}
                      >
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </select>
                    </div>
                    <Button style={{ width: "100%" }} variant="primary" onClick={handleUpdate} >
                      Upadte
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="hidden" name="newColoId" id="newColoId" />
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
