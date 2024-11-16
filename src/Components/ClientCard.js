
import React from 'react';
import '../style/ClientCard.css';

const ClientCard = ({ client }) => {
  return (
    <div className="client-card">
      <img 
        src={client.url_de_perfil} 
        alt={`${client.nome}'s profile`} 
        className="client-image" 
      />
      <div className="client-details">
        <h3>{client.nome}</h3>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>WhatsApp:</strong> {client.contato}</p>
        <p><strong>Endereço ID:</strong> {client.endereço_id}</p>
        <div className="client-links">
          <a href={client.url_do_orçamento} target="_blank" rel="noopener noreferrer">
            Ver Orçamento
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
