

import '../style/Navbar.css';
import React from 'react';

const Navbar = ({ onLinkClick }) => {
  return (
    <div>
      <button className="navbar-toggle">
        ☰
      </button>

      <nav className="navbar">
        <h2 className="navbar-title">Menu</h2>
        <ul className="navbar-list">
          <li><a href="#client" onClick={() => onLinkClick('client')}>Clientes</a></li>
          <li><a href="#dados" onClick={() => onLinkClick('dados')}>Meus dados</a></li>
          <li><a href="#sair">Sair</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
