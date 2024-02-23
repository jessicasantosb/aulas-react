import React from "react";

function Array1() {
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "1984", ano: 1984 },
  ];
  return (
    <div>
      <h3>Array 1</h3>
      <ul>
        {livros
          .filter((livro) => livro.ano >= 1984)
          .map((livro) => (
            <li key={livro.nome}>
              {livro.nome},{livro.ano}
            </li>
          ))}
      </ul>
      {/* a easier way to destruction */}
      <ul>
        {livros
          .filter(({ ano }) => ano >= 1984)
          .map(({ nome, ano }) => (
            <li key={nome}>
              {nome},{ano}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Array1;
