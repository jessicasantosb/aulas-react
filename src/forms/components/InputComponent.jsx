import React from "react";

function InputComponent({ id, label, value, setValue, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
}

// function InputComponent2({ id, label, onChange, ...props }) {
//   return (
//     <>
//       <label htmlFor={id}>{label}</label>
//       <input type="text" id={id} name={id} onChange={onChange} {...props} />
//     </>
//   );

function InputComponentWithValidation({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  );
}

export { InputComponent, InputComponentWithValidation };
