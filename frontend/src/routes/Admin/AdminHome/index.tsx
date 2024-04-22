import "./styles.css";
import mainImage from "../../../assets/main-image.svg";
import { SetStateAction, useEffect, useState } from "react";
import { UserDTO } from "../../../models/user";
import * as userService from "../../../services/user-service";
import ButtonIcon from "../../../components/ButtonIcon";
import { Link } from "react-router-dom";

export default function AdminHome() {
  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService
      .findMe()
      .then((response: { data: SetStateAction<UserDTO | undefined> }) => {
        setUser(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <main>
      <section id="admin-home-section" className="jp-container">
        <div className="home-container">
          <div className="base-card home-card">
            <div className="home-content-container">
              <div>
                <h1>Seja bem vindo a área administrativa</h1>

                <p>
                  Administre os produtos e serviços oferecidos aos seus
                  clientes.
                </p>
              </div>
              <div className="btn h6">
                <Link to="/catalog">
                  <ButtonIcon text="Volte ao catálogo" />
                </Link>
              </div>
            </div>
            <div className="home-image-container">
              <img src={mainImage} alt="main" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
