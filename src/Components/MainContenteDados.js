// src/components/MainContent.js
import React, { useState, useEffect } from "react";
import ConstructionDetails from "./ConstructionDetails";
import '../style/MainContentDados.css'; 
import api from '../Api'; 


const MainContentDados = () => {
  const [construction, setConstruction] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await api.get('/casaconstrucao/53'); 
        setConstruction(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados do perfil:', error);
      }
    };

    fetchUsuario();
  }, []);

  if (!construction) {
    return <div>Carregando...</div>;
  }

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
