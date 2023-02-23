import React from 'react'
import DeleteColor from './DeleteColor'
import EditColor from './EditColor'

export default function Color(props) {
    let {color}= props
  return (
    <tbody id="content">
    <tr style={{ color: "black" }}>
      <td>
        {color.id}
      </td>
      <td>
        {color.nameColor}
      </td>
      <td>
        {color.hexColor}
      </td>
      <td>
        <i
          style={{
            color: `${color.hexColor}`,
            fontSize: 40,
          }}
          className="bi bi-patch-check-fill"
        />
      </td>
      <td>
        <input
          style={{
            border: "none",
            borderCollapse: "collapse",
            width: 100,
          }}
          type="color"
          name="colors" defaultValue={color.hexColor}
        />
      </td>
      <td>
        {color.status=="true"?'Active':'In active'}
      </td>
       <EditColor color={color} />
       <DeleteColor color={color} />
    </tr>
  </tbody>
  )
}
