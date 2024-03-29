import style from "./Social.module.css";
import social1 from "../../assets/social-img-1.png";
import social2 from "../../assets/social-img-2.png";
import social3 from "../../assets/social-img-3.png";
import social4 from "../../assets/social-img-4.png";
import social5 from "../../assets/social-img-5.png";
import social6 from "../../assets/social-img-6.png";

const Social = () => {
  return (
    <section className={style.socialContainer}>
      <div className={style.socialTitleContainer}>
        <h1 className="title">sigam nos no instagram</h1>
        <p className="subtitle">@komodemoveis</p>
      </div>
      <div className={style.socialGridContainer}>
        <a href="">
          <img src={social1} alt="imagem de um ambiente" />
        </a>
        <a href="">
          <img src={social2} alt="imagem de um ambiente" />
        </a>
        <a href="">
          <img src={social3} alt="imagem de um ambiente" />
        </a>
        <a href="">
          <img src={social4} alt="imagem de um ambiente" />
        </a>
        <a href="">
          <img src={social5} alt="imagem de um ambiente" />
        </a>
        <a href="">
          <img src={social6} alt="imagem de um ambiente" />
        </a>
      </div>
    </section>
  );
};

export default Social;
