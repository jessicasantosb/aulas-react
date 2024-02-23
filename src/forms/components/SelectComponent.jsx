import React from "react";

function SelectComponent({ options, value, setValue }) {
  return (
    <>
      <select value={value} onChange={({ target }) => setValue(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectComponent;
