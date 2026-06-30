import React from "react";
import data from "./data.json";
import "./style.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Pizza from "./components/pizza";

function App() {
  const { pizzaMenu } = data;
  return (
    <div className="container">
      <Header text="Fast React Pizza Co." />
      <main className="menu">
        <h2>Our menu</h2>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <Pizza />
      </main>
      <Footer />
    </div>
  );
}

export default App;
