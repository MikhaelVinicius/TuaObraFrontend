
import '../style/Navbar.css';
import React, { useState } from 'react';

const Navbar = ({ onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botão para abrir/fechar a Navbar */}
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>

      {/* Classe condicional para animação */}
      <nav className={`navbar ${isOpen ? 'open' : 'closed'}`}>
        <h2 className="navbar-title">Menu</h2>
        <ul className="navbar-list">
          <li><a href="#client" onClick={() => onLinkClick('client')}>Clientes</a></li>
          <li><a href="#dados" onClick={() => onLinkClick('dados')}>Meus dados</a></li>
          <li><a href="#sair" onClick={() => onLinkClick('login')}>Sair</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
