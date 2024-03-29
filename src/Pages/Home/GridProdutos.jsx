import styles from "./GridProdutos.module.css";
import produto1 from "../../assets/produto-img-1.png";

const GridProdutos = () => {
  return (
    <section className={styles.produtosContainer}>
      <div className={styles.produtosTitleContainer}>
        <h1 className="title">produtos populares</h1>
        <p className="subtitle">Venha conferir nossos produtos em destaque</p>
      </div>
      <div className={styles.gridProdutosContainer}>
        <div className={styles.gridProdutosContent}>
          <a href="">
            <img src={produto1} alt="imagem do produto" />
          </a>
          <h1>Conjunto Porto</h1>
          <p>R$ 799,00</p>
        </div>
        <div className={styles.gridProdutosContent}>
          <a href="">
            <img src={produto1} />
          </a>
          <h1>Conjunto Porto</h1>
          <p>R$ 799,00</p>
        </div>
        <div className={styles.gridProdutosContent}>
          <a href="">
            <img src={produto1} />
          </a>
          <h1>Conjunto Porto</h1>
          <p>R$ 799,00</p>
        </div>
        <div className={styles.gridProdutosContent}>
          <a href="">
            <img src={produto1} />
          </a>
          <h1>Conjunto Porto</h1>
          <p>R$ 799,00</p>
        </div>
        <div className={styles.gridProdutosContent}>
          <a href="">
            <img src={produto1} />
          </a>
          <h1>Conjunto Porto</h1>
          <p>R$ 799,00</p>
        </div>
        <div className={styles.gridProdutosContent}>
          <a href="">
            <img src={produto1} />
          </a>
          <h1>Conjunto Porto</h1>
          <p>R$ 799,00</p>
        </div>
      </div>
      <a href="">
        <button>Veja nosso estoque!</button>
      </a>
    </section>
  );
};

export default GridProdutos;
