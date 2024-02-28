import React from "react";

const reducer = (state, action) => {
  // console.log(action);
  // console.log(state);
  if (action === "aumentar") return state + 1;
  if (action === "diminuir") return state - 1;
  return new Error();
};

function Reducer() {
  const [ativo, setAtivo] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div style={{border: "2px solid black", padding: "10px", textAlign: "center", marginBlock: "20px"}}>
      <button onClick={() => dispatch("aumentar")}>+</button>
      <button onClick={() => dispatch("diminuir")}>-</button>
      <p>{state}</p>
    </div>
  );
}

export default Reducer;
