import React from 'react';
import '../style/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Casa Construção</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Digite seu email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" placeholder="Digite sua senha" required />
        </div>
        <button type="submit" className="login-button">Entrar</button>
      </form>
      <p className="register-text">
        Não tem conta? <a href="/register" className="register-link">Cadastre-se</a>
      </p>
    </div>
  );
};

export default Login;

