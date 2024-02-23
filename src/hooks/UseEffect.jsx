import React from "react";

function UseEffect() {
  const [produto, setProduto] = React.useState(null);
  const [dados, setDados] = React.useState(null);

  // conferir se ja tem um produto salvo no local storage e ja vai inicialza-lo em preferencia
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  // sempre que o produto mudar sera adicionado ao local storage
  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  const handleClick = ({ target }) => {
    const text = target.innerText;
    setProduto(text);
  };

  React.useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [produto]);

  return (
    <div>
      <h3>Use Effect</h3>
      <p>produto: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {dados && (
        <div>
          <p>{dados.nome}</p>
          <p>{dados.preco}</p>
        </div>
      )}
    </div>
  );
}

export default UseEffect;
