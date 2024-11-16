

import '../style/MainContent.css'; 

import mockData from '../mockData.json';
import React, { useEffect, useState } from 'react';
import ClientCard from './ClientCard';

const MainContentClientes = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Simulei a requisição ao back, conectar aqui depois com a api
    setTimeout(() => {
      setClients(mockData);
    }, 1000); 
  }, []);

  return (
    <div className="main-content">
      <h1>Lista de Clientes</h1>
      <div className="clients-list">
        {clients.length > 0 ? (
          clients.map(client => (
            <ClientCard key={client.id} client={client} />
          ))
        ) : (
          <p>Carregando clientes...</p>
        )}
      </div>
    </div>
  );
};

export default MainContentClientes;




