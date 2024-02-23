import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Produtos() {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  console.log(location);
  const search = new URLSearchParams(location.search)
//   http://localhost:5173/router/produtos/smartphone?q=verde&memoria=16
  console.log(search.get('q'));

  return (
    <div>
      <h3>Produtos: {params.id}</h3>
    </div>
  );
}

export default Produtos;
