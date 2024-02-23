import React from "react";

function TextArea() {
  const [textarea, setTextarea] = React.useState("");

  return (
    <form style={{ marginTop: "3rem" }}>
      <textarea
        cols="30"
        rows="10"
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
      ></textarea>
      {textarea}
    </form>
  );
}

export default TextArea;
