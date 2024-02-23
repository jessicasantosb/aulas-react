import React from "react";
import { NavLink } from "react-router-dom";

function Router() {
  return (
    <div>
      <h1>Router</h1>
      <NavLink to="produtos/notebook">Notebook</NavLink>{" "}
      <NavLink to="produtos/smartphone">Smartphone</NavLink>
    </div>
  );
}

export default Router;
