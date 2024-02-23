import React from "react";

function Desafio() {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <>
      <div>
        <h3>Desafio Produtos</h3>
        {produtos.map(({ nome, propriedades }) => (
          <div key={nome}>
            <p>{nome}</p>
            <ul>
                {propriedades.map((p, index) => (
                    <li key={index}>{p}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Desafio;
