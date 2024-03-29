import style from "./Duvidas.module.css";
import duvidas1 from "../../assets/duvidas-img-1.png";
import duvidas2 from "../../assets/duvidas-img-2.png";
import duvidas3 from "../../assets/duvidas-img-3.png";

const Duvidas = () => {
  return (
    <section className={style.duvidasContainer}>
      <div className={style.duvidasTitleContainer}>
        <h1 className="title">Duvidas</h1>
        <p className="subtitle">Tirem suas principais duvidas conosco</p>
      </div>
      <div className={style.duvidasGridContainer}>
        <div className={style.duvidasGridContent}>
          <a href="">
            <img src={duvidas1} alt="imagem de pergunta" />
          </a>
          <h2>Como são feitas as entregas no nosso site</h2>
        </div>
        <div className={style.duvidasGridContent}>
          <a href="">
            <img src={duvidas2} alt="imagem de pergunta" />
          </a>
          <h2>Como são feitas as entregas no nosso site</h2>
        </div>
        <div className={style.duvidasGridContent}>
          <a href="">
            <img src={duvidas3} alt="imagem de pergunta" />
          </a>
          <h2>Como são feitas as entregas no nosso site</h2>
        </div>
      </div>
      <button>Veja todas as perguntas mais frequentes</button>
    </section>
  );
};

export default Duvidas;
