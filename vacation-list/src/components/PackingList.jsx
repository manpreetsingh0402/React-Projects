import React, { useState } from "react";

function PackingList({ itemData, onDelete, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = itemData;

  if (sortBy === "description")
    sortedItems = itemData
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = itemData
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((itemVal) => {
          return (
            <li key={itemVal.id}>
              <input
                type="checkbox"
                value={itemVal.packed}
                onChange={() => onToggleItem(itemVal.id)}
              />
              <span
                style={itemVal.packed ? { textDecoration: "line-through" } : {}}
              >
                {itemVal.quantity} {itemVal.description}
              </span>
              <button onClick={() => onDelete(itemVal.id)}>❌</button>
            </li>
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
