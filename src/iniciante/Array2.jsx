import React from "react";

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#333A73", "#387ADF", "#50C4ED"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#8E7AB5", "#B784B7", "#E493B3"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#B3A398", "#BBC3A4", "#C6DCBA"],
  },
];

function Array2() {
  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace("R$ ", "")) > 1500
  );

  // console.log(dados);

  return (
    <div>
      <h3>Array 2</h3>
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <p>{nome}</p>
          <p>Preco: {preco}</p>
          {/* <ul>{cores}</ul> */}
          <ul>
            {cores.map((cor, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: cor,
                  color: "white",
                  padding: "10px",
                  width: "100px",
                  textAlign: "center",
                }}
              >
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Array2;
