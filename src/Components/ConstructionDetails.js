// src/components/ConstructionDetails.js
import React from "react";
import "../style/ConstructionDetails.css";

const ConstructionDetails = ({ construction }) => {
  return (
    <div className="construction-details">
      <div className="construction-header">
        <img src={construction.url_imagem} alt={`${construction.nome} logo`} className="construction-image" />
        <h2>{construction.nome}</h2>
      </div>
      <div className="construction-info">
        <p><strong>Contato WhatsApp:</strong> {construction.contato}</p>
        <p><strong>Email:</strong> {construction.email}</p>
        <p><strong>Descrição:</strong> {construction.descricao}</p>
        <p><strong>Frete:</strong> {construction.frete}</p>
        <p><strong>Horário de Funcionamento:</strong> {construction.horario}</p>
        <p><strong>ID do Endereço:</strong> {construction.enderco_id}</p>
        <a href={construction.url_lista_de_orcamento} target="_blank" rel="noopener noreferrer" className="budget-link">
          Ver Lista de Orçamentos
        </a>
      </div>
    </div>
  );
};

export default ConstructionDetails;
