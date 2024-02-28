import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "remover":
      return state.filter((item) => item !== action.content);
    case "adicionar":
      return [...state, action.content];
    default:
      throw new Error();
  }
};

function Reducer2() {
  const [state, dispatch] = React.useReducer(reducer, ["Pinha", "Siriguela"]);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <button onClick={() => dispatch({ type: "remover", content: "Pinha" })}>
        Remover pinha
      </button>
      <button
        onClick={() => dispatch({ type: "adicionar", content: "Abacate" })}
      >
        Adicionar abacate
      </button>
      {state}
    </div>
  );
}

export default Reducer2;
