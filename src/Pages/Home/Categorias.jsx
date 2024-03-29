import style from "./Categorias.module.css";
import iconCategoria1 from "../../assets/categoria-icon-1.png";
import iconCategoria2 from "../../assets/categoria-icon-2.png";
import iconCategoria3 from "../../assets/categoria-icon-3.png";
import iconCategoria4 from "../../assets/categoria-icon-4.png";

const Categorias = () => {
  return (
    <section className={style.categoriasContainer}>
      <div className={style.categoriasTitleContainer}>
        <h1 className="title">categorias populares</h1>
        <p className="subtitle">
          Confira aqui abaixo as principais categorias para encontrar tudo que
          precisa para o seu lar
        </p>
      </div>
      <div className={style.categoriasGridContainer}>
        <div
          className={style.categoriasGridContent}
          id={style.categoriasGridContent}
        >
          <div></div>
          <div>
            <img src={iconCategoria1} alt="móveis" />
            <a href="">
              <p>Escritório</p>
            </a>
          </div>
          <div id={style.categoriasBgContent}>
            <h1>melhores e mais sofisticados móveis de escritório</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua cas
            </p>
          </div>
        </div>
        <div
          className={style.categoriasGridContent}
          id={style.categoriasGridContent1}
        >
          <div></div>

          <div>
            <img src={iconCategoria2} alt="móveis" />
            <a href="">
              <p>Escritório</p>
            </a>
          </div>

          <div id={style.categoriasBgContent}>
            <h1>melhores e mais sofisticados móveis de escritório</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua cas
            </p>
          </div>
        </div>
        <div
          className={style.categoriasGridContent}
          id={style.categoriasGridContent2}
        >
          <div></div>

          <div>
            <img src={iconCategoria3} alt="móveis" />
            <a href="">
              <p>Escritório</p>
            </a>
          </div>
          <div id={style.categoriasBgContent}>
            <h1>melhores e mais sofisticados móveis de escritório</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua cas
            </p>
          </div>
        </div>
        <div
          className={style.categoriasGridContent}
          id={style.categoriasGridContent3}
        >
          <div></div>
          <div>
            <img src={iconCategoria4} alt="móveis" />
            <a href="">
              <p>Escritório</p>
            </a>
          </div>

          <div id={style.categoriasBgContent}>
            <h1>melhores e mais sofisticados móveis de escritório</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua cas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categorias;
