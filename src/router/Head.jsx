import React from "react";

function Head(props) {
  React.useEffect(() => {
    document.title = `Aulas | ${props.title}`;
    document.querySelector('meta[name="description"]')
      .setAttribute("content", props.description);

    // console.log(props);
  }, [props]);
  return
  <></>;
}

export default Head;
