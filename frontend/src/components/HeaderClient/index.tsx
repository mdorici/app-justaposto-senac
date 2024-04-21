import "./styles.css";
import logo from '../../assets/logotipo-justaposto-2.png';
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import iconAdmin from "../../assets/admin.png";
import * as authService from "../../services/auth-service";
import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";
import LoggedUser from "../LoggedUser";

export default function HeaderClient() {
  const { contextTokenPayload } = useContext(ContextToken);

  return (
    <header className="jp-header-client">
      <nav className="jp-container">
        <Link to="/">
        <div className="jp-img-logo">
          <img src={logo} alt="Logo" />
        </div> 
        
        </Link>
        <div className="jp-navbar-right">
          <div className="jp-menu-items-container">
            {contextTokenPayload && authService.hasAnyRoles(["ROLE_ADMIN"]) && (
              <Link to="/admin">
                <div className="jp-menu-item">
                  <img src={iconAdmin} alt="Admin" />
                </div>
              </Link>
            )}
            <Link to="/cart">
              <div className="jp-menu-item">
                <CartIcon />
              </div>
            </Link>
          </div>
          <LoggedUser/>
        </div>
      </nav>
    </header>
  );
}