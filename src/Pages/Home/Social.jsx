import style from "Social.module.css";

const Social = () => {
  return (
    <section className={style.socialContainer}>
      <div className="social-title-container">
        <h1 className="title">sigam nos no instagram</h1>
        <p className="subtitle">@komodemoveis</p>
      </div>
      <div className={style.socialGridContainer}>
        <a href="">
          <img src="img/social-img-1.png" alt="imagem de um ambiente" />
        </a>
        <a href="">
          <img src="img/social-img-2.png" alt="imagem de um ambiente" />
        </a>
        <a href="">
          <img src="img/social-img-3.png" alt="imagem de um ambiente" />
        </a>
        <a href="">
          <img src="img/social-img-4.png" alt="imagem de um ambiente" />
        </a>
        <a href="">
          <img src="img/social-img-5.png" alt="imagem de um ambiente" />
        </a>
        <a href="">
          <img src="img/social-img-6.png" alt="imagem de um ambiente" />
        </a>
      </div>
    </section>
  );
};

export default Social;
