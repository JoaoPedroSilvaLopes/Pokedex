import React from "react";
import ReactDOM from "react-dom/client";
import { Pokedex } from "../pokedex";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <main>
    <h1>POKEDEX</h1>
    <Pokedex />
  </main>
);
