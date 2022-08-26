import React, { useState } from "react";
import bentley from "./images/bentley.png";

export default function Bentley() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="collapsible"
        onClick={() => setIsOpen(!isOpen)}
      >
        Bentley
      </button>
      {isOpen && (
        <div className="content">
          <img src={bentley} alt="pic of bentley" />
          <p>
            Bentley is a Box Turtle, a trusted friend of Sly, and an expert in
            computer-hacking and other electronic devices.
            <br /> He's also quite well-read, often stating "I've read about
            this..." when deducing something new and alien to the team.
            <br /> Bentley is also a loyal friend of Sly's. He met Sly and
            Murray in an orphanage.
            <br /> It is revealed in the second game that he has asthma. In the
            third game, he is revealed to be allergic to tomatoes.
            <br /> Another of his catchphrases is "If I did my math right, and I
            always do my math right..."
          </p>
        </div>
      )}
    </>
  );
}
