import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [name, setName] = useState("Marco");
  const [btn, setBtn] = useState("Polo");

  function changeHandle() {
    if (name === "Marco") {
      setName("Polo");
      setBtn("Marco");
    } else {
      setName("Marco");
      setBtn("Polo");
    }
  }

  return (
    <div id="main">
      <h1 id="marco-polo">{name}</h1>
      <button id="marco-polo-toggler" onClick={changeHandle}>
        {btn}
      </button>
    </div>
  );
};

export default App;
