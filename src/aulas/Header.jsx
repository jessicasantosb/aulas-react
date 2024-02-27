import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  React.useEffect(() => {
    // mostrar que o usuario entrou nessa pagina
    // pode ser usado para animacoes, fetch, google analitics
    // console.log("Mudou a rota");
  }, [location]);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "#35374B",
          textTransform: "uppercase",
          letterSpacing: "20px",
        }}
      >
        Aulas React
      </h1>
      <div className="nav-links" style={{ textAlign: "center" }}>
        <NavLink to="/" end>
          Iniciante
        </NavLink>{" "}
        |
        <NavLink to="hooks" end>
          Hooks
        </NavLink>{" "}
        |
        <NavLink to="forms" end>
          Forms
        </NavLink>{" "}
        |
        <NavLink to="css" end>
          Css
        </NavLink>{" "}
        |
        <NavLink to="router" end>
          Router
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
