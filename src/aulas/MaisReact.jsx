import React from "react";
import Button from "../mais react/Btn";
import Reducer from "../mais react/Reducer";
import Reducer2 from "../mais react/Reducer2";
// import Contato from "../mais react/Contato";
const Contato = React.lazy(() => import("../mais react/Contato"));

function MaisReact() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <h1>Mais React</h1>

      <h3>PropTypes</h3>
      <Button margin="10px" width={150} onClick={() => setAtivo(true)}>
        PropTypes
      </Button>

      <h3>Lazy e Suspense</h3>
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Ativar Lazy</button>

      <h3>useReducer</h3>
      <Reducer />
      <Reducer2 />
    </div>
  );
}

export default MaisReact;
