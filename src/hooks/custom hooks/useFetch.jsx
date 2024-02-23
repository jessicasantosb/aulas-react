import React from "react";

function useFetch() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function request(url, options) {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (e) {      
      json = null
      setError("error");
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }

  return { data, error, loading, request };
}

export default useFetch;
