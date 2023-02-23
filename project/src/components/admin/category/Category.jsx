import React from "react";
import DeleteCatalog from "./DeleteCatalog";
import EditCatalog from "./EditCatalog";
export default function Category(props) {
  let { category,categorgyForCreat } = props;
  return (
    <tr style={{ color: "black" }}>
      <td>{category.id}</td>
      <td>{category.name}</td>
      <td>{category.description}</td>
      <td>
        {category.catalogParent.name == null
          ? "Root"
          : category.catalogParent.name}
      </td>
      <td>{category.status === "true" ? "Active " : "In Active"}</td>
     
    <EditCatalog category={category}  categorgyForCreat={categorgyForCreat} />
      <DeleteCatalog category={category}  />
    </tr>
  );
}
