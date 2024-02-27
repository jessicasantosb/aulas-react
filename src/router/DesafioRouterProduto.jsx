import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";

function DesafioRouterProduto() {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (e) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section>
      <Head title={`Produto | ${produto.nome}`} description={produto.nome} />
      {produto.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.titulo} />
      ))}
      <div>
        <h3>{produto.nome}</h3>
        <span>R$ {produto.preco}</span>
      </div>
    </section>
  );
}

export default DesafioRouterProduto;
