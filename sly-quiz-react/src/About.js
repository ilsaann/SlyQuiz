import sly from "./images/sly.png";
import murray from "./images/murray.png";
import bentley from "./images/bentley.png";
import React from "react";
//import Details from "./Details";
//this about file will render information about each of the three main characters
export default function About() {
  return (
    <>
      <button type="button" className="collapsible" id="sly">
        Sly
      </button>
      <div className="content" id="sly">
        <img src={sly} alt="pic of sly" />
        <p>
          Sly is a thief raccoon who is descended from a long line of master
          thieves coming from medieval Europe, feudal Japan, and the American
          Western frontier, tracing all the way back to Ancient Egypt as well as
          pirates.
          <br />
          When Sly was eight years old, his father was killed by a gang called
          the Fiendish Five. The gang stole the "Thievius Raccoonus," a book
          containing the Cooper family's thieving techniques and moves.
          <br />
          Sly was sent to an orphanage. There he met Bentley, a genius turtle,
          and Murray, a comically self-confident and brawny hippopotamus.
        </p>
      </div>
      {/* <Details /> */}
      <div className="content">
        <img src={sly} alt="pic of sly" />
        <p>
          Sly is a thief raccoon who is descended from a long line of master
          thieves coming from medieval Europe, feudal Japan, and the American
          Western frontier, tracing all the way back to Ancient Egypt as well as
          pirates.
          <br />
          When Sly was eight years old, his father was killed by a gang called
          the Fiendish Five. The gang stole the "Thievius Raccoonus," a book
          containing the Cooper family's thieving techniques and moves.
          <br />
          Sly was sent to an orphanage. There he met Bentley, a genius turtle,
          and Murray, a comically self-confident and brawny hippopotamus.
        </p>
      </div>
      <button type="button" className="collapsible">
        Murray
      </button>
      <div className="content">
        <img src={murray} alt="pic of the murray" />
        <p>
          Murray or "the Murray" is a strong, muscular, but slightly dim-witted
          and rotund Hippopotamus who serves as both the getaway driver and
          later team tough guy and fighter for Sly's gang.
          <br /> He met both Sly and Bentley when the three of them were growing
          up in the same orphanage.
          <br /> Murray's driving skill came from his job as a pizza delivery
          boy, during which he hotwired cars and was eventually fired for eating
          too many pizzas.
          <br /> Murray is quite large and has an enormous appetite. He is also
          unbelievably strong, although he only truly seems to realize this in
          the second and third games.
        </p>
      </div>
      <button type="button" className="collapsible">
        Bentley
      </button>
      <div className="content">
        <img src={bentley} alt="pic of bentley" />
        <p>
          Bentley is a Box Turtle, a trusted friend of Sly, and an expert in
          computer-hacking and other electronic devices.
          <br /> He's also quite well-read, often stating "I've read about
          this..." when deducing something new and alien to the team.
          <br /> Bentley is also a loyal friend of Sly's. He met Sly and Murray
          in an orphanage.
          <br /> It is revealed in the second game that he has asthma. In the
          third game, he is revealed to be allergic to tomatoes.
          <br /> Another of his catchphrases is "If I did my math right, and I
          always do my math right..."
        </p>
      </div>
    </>
  );
}
