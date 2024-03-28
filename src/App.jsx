import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sobre from "./Pages/Sobre/Sobre";
import Contato from "./Pages/Contato/Contato";
import Produtos from "./Pages/Produtos/Produtos";
import Footer from "./Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
