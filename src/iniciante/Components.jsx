import React from "react";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h3 style={{ color: cor }}>
      {texto}, {children}
    </h3>
  );
};

function Components() {
  return (
    <div>
      <Titulo cor="tomato" texto="Components titulo 1" />
      {/* se nao fechar nao existe children */}
      <Titulo cor="gray" texto="Components titulo 2">
        <p>O que tem aqui dentro e considerado children da props</p>
      </Titulo>
    </div>
  );
}

export default Components;
