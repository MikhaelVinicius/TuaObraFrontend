// src/components/Navbar.js
import React from 'react';
import '../style/Navbar.css'; // Estilo para o Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Menu</h2>
      <ul className="navbar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
