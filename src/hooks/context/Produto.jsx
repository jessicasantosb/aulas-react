import React from "react";
import { GlobalContext } from "./GlobalContext";

function Produto() {
  const global = React.useContext(GlobalContext);
  console.log(global);
  if (global.dados === null) return null;

  return (
    <div>
      Context Produto:
      {global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
}

export default Produto;
