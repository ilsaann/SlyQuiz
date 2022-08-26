import React, { useState } from "react";
import murray from "./images/murray.png";

export default function Murray() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="collapsible"
        onClick={() => setIsOpen(!isOpen)}
      >
        Murray
      </button>
      {isOpen && (
        <div className="content">
          <img src={murray} alt="pic of the murray" />
          <p>
            Murray or "the Murray" is a strong, muscular, but slightly
            dim-witted and rotund Hippopotamus who serves as both the getaway
            driver and later team tough guy and fighter for Sly's gang.
            <br /> He met both Sly and Bentley when the three of them were
            growing up in the same orphanage.
            <br /> Murray's driving skill came from his job as a pizza delivery
            boy, during which he hotwired cars and was eventually fired for
            eating too many pizzas.
            <br /> Murray is quite large and has an enormous appetite. He is
            also unbelievably strong, although he only truly seems to realize
            this in the second and third games.
          </p>
        </div>
      )}
    </>
  );
}
