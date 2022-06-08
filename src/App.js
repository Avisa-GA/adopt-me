import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams.js";
import { StrictMode } from "react";
import Details from "./Details";

// replace App
const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route exact path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
