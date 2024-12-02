import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainContent from '../Components/MainContent';
import Navbar from '../Components/Navbar';
import MainContentClientes from '../Components/MainContent';
import MainContentDados from '../Components/MainContenteDados';


const Homepage = () => {
  const [activeComponent, setActiveComponent] = useState('');

  
  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <Navbar onLinkClick={handleLinkClick} />
      <Header />

      <main>
  
        {activeComponent === 'client' && <MainContentClientes />}
        {activeComponent === 'dados' && <MainContentDados />}
        
        {activeComponent === 'login' && <MainContent />}
      </main>

 
    </div>
  );
};

export default Homepage;
