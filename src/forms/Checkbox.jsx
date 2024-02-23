import React from "react";

function Checkbox() {
  const [cores, setCores] = React.useState([]);

  const coresArray = ['azul', 'vermelho', 'roxo', 'laranja', 'amarelo']

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <form>
      <h3>Cores check</h3>
      {coresArray.map((c, index) => (
      <label key={index}>
        {/* c + index para conseguir repetir texto */}
        <input
          type="checkbox"
          value={c + index}
          checked={cores.includes(c + index)}
          onChange={handleChange}
        />
        {c}
      </label>
      ))}
    </form>
  );
}

export default Checkbox;
