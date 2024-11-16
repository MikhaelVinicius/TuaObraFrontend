// src/components/MainContent.js
import React, { useState, useEffect } from "react";
import ConstructionDetails from "./ConstructionDetails";
import '../style/MainContentDados.css'; 


const MainContentDados = () => {
  const [construction, setConstruction] = useState(null);

  useEffect(() => {
    // Simula a requisição de dados do backend
    const mockConstruction = {
      id: 1,
      contato: "555-9876",
      descricao: "Uma empresa dedicada à construção sustentável e eficiente.",
      email: "contato@casaconstrucoes.com",
      frete: "Frete grátis para pedidos acima de R$ 500,00.",
      horario: "Seg-Sex: 8h às 18h, Sáb: 8h às 12h.",
      nome: "Casa Construções",
      url_imagem: "https://via.placeholder.com/80",
      url_lista_de_orcamento: "https://example.com/orcamentos",
      enderco_id: "E789"
    };

    setTimeout(() => {
      setConstruction(mockConstruction);
    }, 1000); 
  }, []);

  return (
    <div className="main-content">
      <h1>Detalhes da Casa de Construção</h1>
      {construction ? (
        <ConstructionDetails construction={construction} />
      ) : (
        <p>Carregando informações da casa de construção...</p>
      )}
    </div>
  );
};

export default MainContentDados;
