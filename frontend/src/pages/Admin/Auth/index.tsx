import authImage from '../../../assets/auth-image.svg';
import { Route } from 'react-router-dom';
import Login from './Login';

import './styles.css';

const Auth = () => {

    return (
        <div className="auth-container">
            <div className="auth-banner-container">
                <h1>Cadastre-se</h1>
                <p>Experimente nossos serviços sob demanda para você.</p>
                <img src={authImage} alt="auth" />
            </div>
            <div className="auth-form-container">
                <Route>
                    <Route path="/admin/auth/login">
                        <Login />
                    </Route>
                    <Route path="/admin/auth/signup">
                        <h1>Card de Signup</h1>
                    </Route>
                    <Route path="/admin/auth/recover">
                        <h1>Card de Recover</h1>
                    </Route>
                </Route>
            </div>
        </div>
    );
}

export default Auth;