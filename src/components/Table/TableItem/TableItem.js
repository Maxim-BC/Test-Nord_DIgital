import React, { useState } from "react";
import "./TableItem.css";

export default function ItemTable({
  id,
  name,
  username,
  email,
  getTargetItem,
}) {
  const [itemName] = useState(name);
  const [itemUsername] = useState(username);
  const [itemEmail] = useState(email);
  const [itemId] = useState(id);

  return (
    <tr onClick={() => getTargetItem(itemId)} className="table-item__tr">
      <td className="table-item__td">{itemName}</td>
      <td className="table-item__td">{itemUsername}</td>
      <td className="table-item__td">{itemEmail}</td>
    </tr>
  );
}
