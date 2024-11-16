
import React from 'react';
import '../style/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1>Bem-vindo à Minha Homepage</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
