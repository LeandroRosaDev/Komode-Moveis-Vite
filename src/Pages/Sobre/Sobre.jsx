import Menu from "../../Components/Menu";
import imgSobre1 from "../../assets/sobre/blog-2.jpg";
import imgIcone1 from "../../assets/sobre/card-1.png";
import style from "./Sobre.module.css";

const Sobre = () => {
  return (
    <>
      <div className={style.headerBg}>
        <Menu />
      </div>
      <main>
        <section className={style.pagSobreContainer}>
          <div>
            <h1 className="title">O início de tudo</h1>
            <p className="subtitle" style={{ maxWidth: "600px" }}>
              Nossa historia sempre foi acompanhada de muita dedicação e
              esforço, trabalhamos duro e nos esforçamos desde o inicio para
              entregar produtos de excelente qualidade, sempre prezando pelo
              respeito mútuo entre nossos colaboradores.
            </p>
          </div>
          <div className={style.pagSobreGridContainer}>
            <div className={style.pagSobreGridContent}>
              <div className={style.pagSobreGridContentImg}>
                <img className={style.sobreImg1} src={imgSobre1} alt="" />
                <img className={style.sobreImg2} src={imgIcone1} alt="" />
              </div>
              <div className={style.pagSobreGridContentText}>
                <h1>Como foi o nosso inicio</h1>
                <p>
                  No início de nossa jornada, em 2019, a Komode Móveis e
                  Decorados era apenas um sonho, uma pequena semente de
                  esperança plantada em solo fértil. Em uma modesta loja,
                  começamos a escrever nossa história, cheios de determinação e
                  paixão pela criação de móveis que transformam ambientes em
                  lares acolhedores.
                </p>
                <p>
                  Com o tempo, aprendemos que cada peça de mobiliário que
                  produzimos é mais do que apenas um objeto. É uma expressão de
                  nossa dedicação, um reflexo de nossa criatividade e um
                  testemunho de nossa busca incessante pela qualidade. Com cada
                  detalhe meticulosamente pensado e cada estofado cuidadosamente
                  escolhido, construímos não apenas móveis, mas sim, memórias.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sobre;
