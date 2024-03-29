import style from "./Contato.module.css";
import Menu from "../../Components/Menu";
import contatoIcon1 from "../../assets/contato/contato-icon-1.png";
import contatoIcon2 from "../../assets/contato/contato-icon-2.png";
import contatoIcon3 from "../../assets/contato/contato-icon-3.png";

const Contato = () => {
  return (
    <>
      <div className={style.headerBg}>
        <Menu />
      </div>
      <main className={style.pagContatoContainer}>
        {/* <iframe
          src={contatoIcon1}mbed?pb=!1m18!1m12!1m3!1d3678.373149823751!2d-43.30915600000001!3d-22.7886332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997aea6643b655%3A0xe4516119cb567fb5!2sAv.%20Pres.%20Vargas%2C%20292%20-%20Centro%2C%20Duque%20de%20Caxias%20-%20RJ%2C%2025070-330!5e0!3m2!1spt-BR!2sbr!4v1710095280520!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe> */}
        <div className={style.pagContatoIconsContainer}>
          <div className={style.pagContatoIconsContent}>
            <div>
              <img src={contatoIcon1} alt="" />
              <h2>Onde Nós Estamos?</h2>
              <p>
                Rua Píres do Rio, 509 - Éden, <br />
                São joão de meriti - RJ
              </p>
            </div>
            <div>
              <img src={contatoIcon2} alt="" />
              <h2>Entre em Contato</h2>
              <p>
                T +55 21 99455 3607 <br />F +55 21 96645 3123
              </p>
            </div>
            <div>
              <img src={contatoIcon3} alt="" />
              <h2>Horário de funcionamento</h2>
              <p>
                Seg - Sex: 8 am - 17 pm <br />
                Sáb 8 am - 12 pm
              </p>
            </div>
          </div>
          <div className={style.pagContatoMsgContent}>
            <h1>ENVIE-NOS UMA MENSAGEM</h1>
            <p>
              Agradeçemos o seu contato, atendemos normalmente de segunda a
              sexta de 08:00 as 17:00 <br />E no sábado de 08:00 as 12:00, em
              caso de dúvidas ou reclamações basta enviar-nos uma mensagem
            </p>
            <a href="">
              <button>WHATSAPP</button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contato;
