import React from "react";
import DeleteSize from "./DeleteSize";
import EditSize from "./EditSize";

export default function Size({ size }) {
  return (
    <tr style={{ color: "black" }}>
      <td>{size.id}</td>
      <td>{size.name}</td>
      <td>{size.status == "true" ? "Active" : "In Active"}</td>
        <EditSize size={size} />
        <DeleteSize size={size} />
    </tr>
  );
}
