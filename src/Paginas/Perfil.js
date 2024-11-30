import React from 'react';
import '../style/Perfil.css';

const Perfil = () => {
  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <img
          className="perfil-avatar"
          src="https://via.placeholder.com/150"
          alt="Foto de perfil"
        />
        <h1 className="perfil-nome">Nome do Usuário</h1>
        <button className="editar-button">Editar Perfil</button>
      </div>

      <div className="perfil-info">
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span className="info-value">usuario@email.com</span>
        </div>
        <div className="info-item">
          <span className="info-label">WhatsApp:</span>
          <span className="info-value">(99) 99999-9999</span>
        </div>
        <div className="info-item">
          <span className="info-label">Endereço:</span>
          <span className="info-value">Rua Exemplo, 123 - Bairro, Cidade</span>
        </div>
        <div className="info-item">
          <span className="info-label">CEP:</span>
          <span className="info-value">12345-678</span>
        </div>
        <div className="info-item">
          <span className="info-label">Referência:</span>
          <span className="info-value">Perto do mercado X</span>
        </div>
      </div>
    </div>
  );
};

export default Perfil;