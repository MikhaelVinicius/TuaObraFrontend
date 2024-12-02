import React, { useState } from 'react';
import { useNavigate } from "react-router";
import api from '../Api'; // Axios configurado
import '../style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/casaconstrucao', { email, password });
      const { id } = response.data; 
      localStorage.setItem('id', id); 
      navigate(`/casacontrucao/${id}`); 
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Email ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Casa Construção</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Entrar</button>
      </form>
      <p className="register-text">
        Não tem conta? <a href="/register" className="register-link">Cadastre-se</a>
      </p>
    </div>
  );
};

export default Login;
