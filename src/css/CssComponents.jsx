import React from "react";
import styled from "styled-components";

const Comprar = styled.button`
  text-decoration: none;
  background: ${({ ativo }) => (ativo ? "purple" : "white")};
  padding: 15px;
  color: ${({ ativo }) => (ativo ? "white" : "purple")};
  &:hover {
    color: green;
    background-color: tomato;
  }
`;

function CssComponents() {
  const [ativo, setAtivo] = React.useState(false);

  const handleClick = () => {
    setAtivo(!ativo);
  };

  return (
    <div>
      {/* Warning: Received `false` for a non-boolean attribute `ativo`. If you want to write it to the DOM, pass a string instead: ativo="false" or ativo={value.toString()}. If you used to conditionally omit it with ativo={condition && value}, pass ativo={condition ? value : undefined} instead. */}

      <Comprar ativo={ativo} onClick={handleClick}>
        Comprar
      </Comprar>
    </div>
  );
}

export default CssComponents;
