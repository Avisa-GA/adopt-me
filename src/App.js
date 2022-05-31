import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    <Pet name="Luna" animal="Dog" breed="Havanese" />,
    <Pet name="Pepper" animal="Bird" breed="Cockatiel" />,
    <Pet name="Doink" animal="Cat" breed="Mix" />,
  ]);
};
render(React.createElement(App), document.getElementById("root"));
