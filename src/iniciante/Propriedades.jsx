import React from 'react'

function Propriedades({label, id, ...props}) {
  return (
    <div>
      <h3>Propriedades</h3>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" {...props} />      
    </div>
  )
}

export default Propriedades
