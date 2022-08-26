import React from "react";
import sly from "./images/sly.png";
import { useState } from "react";
export default function Sly() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="collapsible"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sly
      </button>
      {isOpen && (
        <div className="content">
          <img src={sly} alt="pic of sly" />
          <p>
            Sly is a thief raccoon who is descended from a long line of master
            thieves coming from medieval Europe, feudal Japan, and the American
            Western frontier, tracing all the way back to Ancient Egypt as well
            as pirates.
            <br />
            When Sly was eight years old, his father was killed by a gang called
            the Fiendish Five. The gang stole the "Thievius Raccoonus," a book
            containing the Cooper family's thieving techniques and moves.
            <br />
            Sly was sent to an orphanage. There he met Bentley, a genius turtle,
            and Murray, a comically self-confident and brawny hippopotamus.
          </p>
        </div>
      )}
    </>
  );
}
