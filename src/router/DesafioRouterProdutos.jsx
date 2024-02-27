import React from "react";
import Head from "./Head";
import { Link } from "react-router-dom";

function DesafioRouterProdutos() {
  const [produtos, setProdutos] = React.useState([]);
  const [productModalOpen, setProductModalOpen] = React.useState(false);
  const [produtoOpen, setProdutoOpen] = React.useState("");

  React.useEffect(() => {
    if (produtos !== null)
      fetch("https://ranekapi.origamid.dev/json/api/produto")
        .then((response) => response.json())
        .then((json) => setProdutos(json));
  }, [produtos]);

  const handleProductClick = (i) => {
    setProductModalOpen(true);
    setProdutoOpen(i);
  };

  return (
    <>
      <Head title="Loja | Produtos" description="Produtos da loja" />
      <section className="router-desafio1Produtos">
        {produtos.map((produto) => (
          <Link to={`produto/${produto.id}`} key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <p>{produto.nome}</p>
          </Link>
        ))}
      </section>
    </>
  );
}

export default DesafioRouterProdutos;
