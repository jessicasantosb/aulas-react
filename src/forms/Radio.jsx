import React from "react";

function Radio() {
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <h3>Cores</h3>     
      <label>
        <input
          type="radio"
          onChange={({target}) => setCor(target.value)}
          checked={cor === "azul"}
          value="azul"
        />
        Azul
      </label>
      <label style={{paddingRight: "1rem"}}>
        <input
          type="radio"
          onChange={({target}) => setCor(target.value)}
          checked={cor === "roxo"}
          value="roxo"
        />
        Roxo
      </label>
      {cor}

      <h3>Produtos</h3>     
      <label>
        <input
          type="radio"
          onChange={handleChange}
          checked={produto === "smartphone"}
          value="smartphone"
        />
        Smartphone
      </label>
      <label style={{paddingRight: "1rem"}}>
        <input
          type="radio"
          onChange={handleChange}
          checked={produto === "notebook"}
          value="notebook"
        />
        Notebook
      </label>
      {produto}
    </form>
  );
}

export default Radio;
