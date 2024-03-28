import GridProdutos from "../Home/GridProdutos";
import Categorias from "../Home/Categorias";
import SobreHome from "../Home/SobreHome";
import Duvidas from "../Home/Duvidas";
import Social from "../Home/Social";
import Menu from "../../Components/Menu";

const Home = () => {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <GridProdutos />
      <Categorias />
      <SobreHome />
      <Duvidas />
      <Social />
    </div>
  );
};

export default Home;
