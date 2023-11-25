import mainImage from '../../assets/main-image.svg';
import ButtonIcon from '../../components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Justaposto: estética automotiva</h1>
            <p>
              Encontre os melhores serviços em estética automotiva para atender suas necessidades.
            </p>
          </div>
          <div>
            <Link to="/products">
              <ButtonIcon text="Inicie agora a sua busca" />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <img src={mainImage} alt="main" />
        </div>
      </div>
    </div>
  );
};

export default Home;
