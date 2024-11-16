

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
            <li><a href="#client">Clientes</a></li>
            <li><a href="#Dados">Meus dados</a></li>
            <li><a href="#sair">Sair</a></li>
            
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
