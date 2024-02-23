import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Iniciante from "./aulas/Iniciante";
import Hooks from "./aulas/Hooks";
import Forms from "./aulas/Forms";
import Css from "./aulas/Css";
import Router from "./aulas/Router";
import Produtos from "./router/Produtos";
import MaisReact from "./aulas/MaisReact";
import Header from "./aulas/Header";
import Error from "./aulas/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Iniciante />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="forms" element={<Forms />} />
        <Route path="css" element={<Css />} />
        <Route path="router" element={<Router />} />
        <Route path="router/produtos/:id" element={<Produtos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
