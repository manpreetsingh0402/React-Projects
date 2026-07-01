import Logo from "./components/logo";
import Form from "./components/form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <>
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        itemData={items}
        onDelete={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={clearList}
      />
      <Stats itemLength={items} />
    </>
  );
}

export default App;
