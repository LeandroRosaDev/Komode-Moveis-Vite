import style from "./SobreHome.module.css";

const SobreHome = () => {
  return (
    <section className={style.sobreContainer}>
      <div className={style.sobreContent}>
        <h1>Nossa história</h1>
        <p>
          Nossa história se inicia em 2019, quando decidimos abrir nossa
          primeira loja. Localizada em São João de Meriti nossa loja hoje em
          outro endereço nos trouxe a sabedoria e a experiençia de como lidar
          com o público e sempre atender com muito carinho nossos clientes.
        </p>
        <a href="">
          <button>Veja a nossa história completa</button>
        </a>
      </div>
    </section>
  );
};

export default SobreHome;
