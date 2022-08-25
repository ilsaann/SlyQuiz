import React from "react";
//this about file will render information about each of the three main characters
export default function About() {
  return (
    <>
      <button type="button" class="collapsible">
        Sly
      </button>
      <div class="content">
        <img src="sly-quiz-react\images\sly.png" />
      </div>
      ;
      <button type="button" class="collapsible">
        Murray
      </button>
      <div class="content">About</div>
      <button type="button" class="collapsible">
        Bentley
      </button>
      <div class="content">About</div>
    </>
  );
}
