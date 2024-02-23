import React from "react";

function RadioDesafio({ pergunta, options, id, value, onChange, active }) {
  if (active == false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            // Warning: Found 3 elements with non-unique id #p1 #p2 #p3 #p4
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}

export default RadioDesafio;
