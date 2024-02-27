import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Router() {
  return (
    <div>
      <h1>Router</h1>

      <nav className="nav-links">
        <NavLink to="" >
          Produtos
        </NavLink>
        <NavLink to="contato">Contato</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Router;
