import React from "react";
import "./App.css";

import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <Card
          title="Card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
        >
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image cap"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="35%" y="50%" fill="#dee2e6" dy=".3em">
              Image cap
            </text>
          </svg>
        </Card>

        <Card
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
        />
      </div>
    </div>
  );
}

export default App;
