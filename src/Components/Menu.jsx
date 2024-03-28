import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <header className="header-container">
      <ul className={styles.menuSocialContainer}>
        <li>
          <a href="">
            <img src="img/menu-social-logo-1.png" alt="icone social" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="img/menu-social-logo-2.png" alt="icone social" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="img/menu-social-logo-3.png" alt="icone social" />
          </a>
        </li>
      </ul>
      <nav className={styles.menuContainer}>
        <img src="img/logotipo.png" alt="logotipo" />
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
