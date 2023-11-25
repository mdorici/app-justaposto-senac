import { NavLink, useNavigate } from 'react-router-dom';
import ButtonIcon from '../../../../components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from '../../../../util/request';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../AuthContext';
import { saveAuthData } from '../../../../util/storage';
import { getTokenData } from '../../../../util/token';

import './styles.css';

type CredentialsDTO = {
  username: string;
  password: string;
};

const Login = () => {
  const { setAuthContextData } = useContext(AuthContext);
  const [hasError, setHasError] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<CredentialsDTO>();
  
  // Add useNavigate
  const navigate = useNavigate();

  const onSubmit = (formData: CredentialsDTO) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        // useNavigate instead of history
        navigate('/admin');
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">Erro ao tentar efetuar o login</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            type="text"
            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">{errors.username?.message}</div>
        </div>
        <div className="mb-2">
          <input
            {...register('password', {
              required: 'Campo obrigatório',
            })}
            type="password"
            className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block">{errors.password?.message}</div>
        </div>
        {/* NavLink instead of Link */}
        <NavLink to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha
        </NavLink>
        <div className="login-submit">
          <ButtonIcon text="Fazer login" />
        </div>
        <div className="signup-container">
          <span className="not-registered">Não tem Cadastro?</span>
          <NavLink to="/admin/auth/register" className="login-link-register">
            CADASTRAR
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
