import style from "./Duvidas.module.css";

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
            <img src="img/duvidas-img-1.png" alt="imagem de pergunta" />
          </a>
          <h2>Como são feitas as entregas no nosso site</h2>
        </div>
        <div className={style.duvidasGridContent}>
          <a href="">
            <img src="img/duvidas-img-2.png" alt="imagem de pergunta" />
          </a>
          <h2>Como são feitas as entregas no nosso site</h2>
        </div>
        <div className={style.duvidasGridContent}>
          <a href="">
            <img src="img/duvidas-img-3.png" alt="imagem de pergunta" />
          </a>
          <h2>Como são feitas as entregas no nosso site</h2>
        </div>
      </div>
      <button>Veja todas as perguntas mais frequentes</button>
    </section>
  );
};

export default Duvidas;
