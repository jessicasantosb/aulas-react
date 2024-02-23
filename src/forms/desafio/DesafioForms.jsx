import React from "react";
import RadioDesafio from "./RadioDesafio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      "import Component from './Component'",
      "require('./Component')",
      "import './Component'",
    ],
    resposta: "import Component from './Component'",
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

function DesafioForms() {
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  const handleOptionChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };

  const resultadoFinal = () => {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] == resposta
    );
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`);
  };

  const handleNextQuestion = () => {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1)
      resultadoFinal();
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <RadioDesafio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleOptionChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleNextQuestion}>Próxima</button>
      )}
    </form>
  );
}

export default DesafioForms;
