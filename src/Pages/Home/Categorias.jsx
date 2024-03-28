import style from "./Categorias.module.css";

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
          id="categorias-grid-content"
        >
          <div></div>
          <div>
            <img src="img/categoria-icon-1.png" alt="móveis" />
            <a href="">
              <p>Escritório</p>
            </a>
          </div>
          <div id="categorias-bg-content">
            <h1>melhores e mais sofisticados móveis de escritório</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua cas
            </p>
          </div>
        </div>
        <div
          className={style.categoriasGridContent}
          id="categorias-grid-content-1"
        >
          <div></div>

          <div>
            <img src="img/categoria-icon-2.png" alt="móveis" />
            <a href="">
              <p>Escritório</p>
            </a>
          </div>

          <div id="categorias-bg-content">
            <h1>melhores e mais sofisticados móveis de escritório</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua cas
            </p>
          </div>
        </div>
        <div
          className={style.categoriasGridContent}
          id="categorias-grid-content-2"
        >
          <div></div>

          <div>
            <img src="img/categoria-icon-3.png" alt="móveis" />
            <a href="">
              <p>Escritório</p>
            </a>
          </div>
          <div id="categorias-bg-content">
            <h1>melhores e mais sofisticados móveis de escritório</h1>
            <p>
              Venha conferir os melhores móveis de escritório para a sua cas
            </p>
          </div>
        </div>
        <div
          className={style.categoriasGridContent}
          id="categorias-grid-content-3"
        >
          <div></div>

          <div>
            <img src="img/categoria-icon-4.png" alt="móveis" />
            <a href="">
              <p>Escritório</p>
            </a>
          </div>

          <div id="categorias-bg-content">
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
