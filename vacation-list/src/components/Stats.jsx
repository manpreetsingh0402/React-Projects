import React from "react";

function Stats({ itemLength }) {
  const numItems = itemLength.length;
  const itemPacked = itemLength.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numItems == 0
          ? "Start adding some item to your packing list 🚀"
          : ` ${
              percentage < 100
                ? `💼 You have ${numItems} items on your list, and you already packed ${itemPacked}(${percentage}%)`
                : "You got Everything! Ready to go✈️"
            }`}
      </em>
    </footer>
  );
}

export default Stats;
