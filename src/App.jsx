import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Iniciante from "./aulas/Iniciante";
import Hooks from "./aulas/Hooks";
import Forms from "./aulas/Forms";
import Css from "./aulas/Css";
import Router from "./aulas/Router";
import DesafioProdutos from "./router/DesafioRouterProdutos";
import DesafioProduto from "./router/DesafioRouterProduto";
import DesafioContato from "./router/DesafioRouterContato";
import MaisReact from "./aulas/MaisReact";
import Header from "./aulas/Header";
import Error from "./aulas/ErrorPage";

function App() {
  const [contar, setContar] = React.useState(0);

  return (
    <BrowserRouter>
      <Header />

      <button onClick={() => setContar(contar + 1)}>
        {contar} | React.memo(Header)
      </button>

      <Routes>
        <Route path="/" element={<Iniciante />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="forms" element={<Forms />} />
        <Route path="css" element={<Css />} />

        <Route path="router" element={<Router />}>
          <Route path="" element={<DesafioProdutos />} />
          <Route path="produto/:id" element={<DesafioProduto/>}/>
          <Route path="contato" element={<DesafioContato />} />
        </Route>

        <Route path="maisreact" element={<MaisReact />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
