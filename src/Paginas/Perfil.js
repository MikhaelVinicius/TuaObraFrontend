import React, { useEffect, useState } from 'react';
import api from '../Api'; 
import '../style/Perfil.css';

const Perfil = () => {
  const [usuario, setUsuario] = useState(null); 

 
  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await api.get('/casaconstrucao/1'); 
        setUsuario(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados do perfil:', error);
      }
    };

    fetchUsuario();
  }, []);

  if (!usuario) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <img
          className="perfil-avatar"
          src={usuario.urlImagemPerfil || 'https://via.placeholder.com/150'}
          alt="Foto de perfil"
        />
        <h1 className="perfil-nome">{usuario.nome}</h1>
        <p className="perfil-descricao">{usuario.descricao}</p>
        <button className="editar-button">Editar Perfil</button>
      </div>

      <div className="perfil-info">
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span className="info-value">{usuario.email}</span>
        </div>
        <div className="info-item">
          <span className="info-label">WhatsApp:</span>
          <span className="info-value">{usuario.contatoWhatsApp}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Horário:</span>
          <span className="info-value">{usuario.horario}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Frete:</span>
          <span className="info-value">{usuario.frete}</span>
        </div>

        <h2>Endereço</h2>
        {usuario.endereco ? (
          <>
            <div className="info-item">
              <span className="info-label">CEP:</span>
              <span className="info-value">{usuario.endereco.cep}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Lugar:</span>
              <span className="info-value">{usuario.endereco.nomeLugar}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Número:</span>
              <span className="info-value">{usuario.endereco.numero}</span>
            </div>
          </>
        ) : (
          <p>Endereço não cadastrado.</p>
        )}

        <h2>Clientes</h2>
        {usuario.clientes && usuario.clientes.length > 0 ? (
          usuario.clientes.map((cliente) => (
            <div key={cliente.id} className="cliente-item">
              <img
                className="cliente-avatar"
                src={cliente.urlImagemPerfil || 'https://via.placeholder.com/100'}
                alt={`Foto de ${cliente.nome}`}
              />
              <div>
                <p>
                  <strong>Nome:</strong> {cliente.nome}
                </p>
                <p>
                  <strong>Email:</strong> {cliente.email}
                </p>
                <p>
                  <strong>WhatsApp:</strong> {cliente.contatoWhatsApp}
                </p>
                {cliente.endereco ? (
                  <p>
                    <strong>Endereço:</strong> {cliente.endereco.nomeLugar}, {cliente.endereco.numero} - CEP: {cliente.endereco.cep}
                  </p>
                ) : (
                  <p>Endereço não disponível.</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Sem clientes cadastrados.</p>
        )}
      </div>
    </div>
  );
};

export default Perfil;
