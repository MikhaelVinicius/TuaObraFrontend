

import '../style/Navbar.css'; 

import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>

    
      {isOpen && (
        <nav className="navbar">
          <h2 className="navbar-title">Menu</h2>
          <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
