import GridProdutos from "../Home/GridProdutos";
import Categorias from "../Home/Categorias";
import SobreHome from "../Home/SobreHome";
import Duvidas from "../Home/Duvidas";
import Social from "../Home/Social";
import Menu from "../../Components/Menu";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={style.headerBg}>
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
