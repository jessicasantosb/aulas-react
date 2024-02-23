import React from "react";

function Select() {
  const [select, setSelect] = React.useState("");

  return <form>
    <select id="produtos" value={select} onChange={({target}) => setSelect(target.value)} style={{marginTop: "3rem"}}>
        <option value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
    </select>
        {select}
  </form>;
}

export default Select;
