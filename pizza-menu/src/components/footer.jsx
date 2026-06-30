import React, { useState } from "react";

function Footer() {
  const hours = new Date().getHours();
  const openHours = 10;
  const closeHours = 20;
  const isOpen = hours >= openHours && hours <= closeHours;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open from {openHours}:00 to {closeHours}:00. Come visit us or
            order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>
          Sorry!! We are closed right now <br />
          We're happy to welcome you between {openHours}:00 and {closeHours}:00.
        </p>
      )}
    </footer>
  );
}

export default Footer;
