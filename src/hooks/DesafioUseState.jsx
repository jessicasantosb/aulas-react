import React from "react";

function DesafioUseState() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );

    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>tablet</button>
      </div>

      {carregando && <p>Carregando...</p>}

      {!carregando && dados && (
        <div>
          <h3>Use State</h3>
          <p>{dados.nome}</p>
          <p>R$ {dados.preco}</p>
          <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        </div>
      )}
    </>
  );
}

export default DesafioUseState;
