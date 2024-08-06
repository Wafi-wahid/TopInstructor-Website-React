import React from "react";
import ReactDOM from "react-dom";

const fname = "wafi";
const lname = "wahid";

const root = ReactDOM.createRoot(document.getElementById("root")); // React 18
root.render(
  <div>
    <header>Hello World</header>
    <p>It's my first React project</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>{fname + " " + lname}</li>
    </ul>
  </div>
);
