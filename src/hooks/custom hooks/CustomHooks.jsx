import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

function CustomHooks() {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
      // console.log(response)
    }
    fetchData();
  }, []);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;

  // if(data === null) return null
  if (data)
    return (
      <div>
        <h3>Custom Hooks</h3>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <p>{produto.nome}</p>
          </div>
        ))}
      </div>
    );
}

export default CustomHooks;
