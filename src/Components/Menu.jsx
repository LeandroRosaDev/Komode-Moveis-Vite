import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import socialIcon1 from "../assets/menu-social-logo-1.png";
import socialIcon2 from "../assets/menu-social-logo-2.png";
import socialIcon3 from "../assets/menu-social-logo-3.png";
import logotipo from "../assets/logotipo.png";

const Menu = () => {
  return (
    <header className="header-container">
      <ul className={styles.menuSocialContainer}>
        <li>
          <a href="">
            <img src={socialIcon1} alt="icone social" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={socialIcon2} alt="icone social" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={socialIcon3} alt="icone social" />
          </a>
        </li>
      </ul>
      <nav className={styles.menuContainer}>
        <img src={logotipo} alt="logotipo" />
        <ul className={styles.menuContent}>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/produto">Produto</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
