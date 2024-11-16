
import React from 'react';
import '../style/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1>Tua Obra!</h1>
      <nav>
      <form className="search-form" action="#search" method="get">
      <input
        type="text"
        name="query"
        placeholder="Buscar..."
        className="search-input"
      />
      <button type="submit" className="search-button">Buscar</button>
    </form>
      </nav>
    </header>
  );
};

export default Header;
