import React from "react";
import PropTypes from 'prop-types'

function Btn(props) {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
    >
      {props.children}
    </button>
  );
}

Btn.defaultProps = {
  margin: '10px'
}

Btn.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string,
}

export default Btn;
