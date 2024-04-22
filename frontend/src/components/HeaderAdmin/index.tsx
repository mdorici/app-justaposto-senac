import "./styles.css";
import homeIcon from '../../assets/home.png';
import logo from '../../assets/logotipo-justaposto-2.png';
import productsIcon from '../../assets/products.png';
import LoggedUser from "../LoggedUser";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <header className="jp-header-admin">
      <nav className="jp-container">
        <img src={logo} alt="Logo" />
        <div className="jp-navbar-right">
          <div className="jp-menu-items-container">
            <NavLink to="/admin/home" className={({isActive}) => isActive ? "jp-menu-item-active" : ""}>
              <div className="jp-menu-item">
                <img src={homeIcon} alt="Início" />
                <p>Início</p>
              </div>
            </NavLink>
            <NavLink to="/admin/products" className={({isActive}) => isActive ? "jp-menu-item-active" : ""}>
              <div className="jp-menu-item">
                <img src={productsIcon} alt="Cadastro de produtos" />
                <p>Produtos</p>
              </div>
            </NavLink>
          </div>
          <LoggedUser/>
        </div>
      </nav>
    </header>
  );
}