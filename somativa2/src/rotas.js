import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./paginas/cadastro";
import Login from "./paginas/login";
import Principal from "./paginas/principal";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Principal />} />

        {/* Outras páginas */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

