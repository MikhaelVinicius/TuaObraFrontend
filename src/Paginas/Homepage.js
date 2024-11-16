import React from 'react';


import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainContent from '../Components/MainContent';

const Homepage = () => {
  return (
    <div>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Componente principal da página */}
      <main>
        <MainContent />
      </main>

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
};

export default Homepage;
