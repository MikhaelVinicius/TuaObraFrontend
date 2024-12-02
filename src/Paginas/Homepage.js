import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainContent from '../Components/MainContent';
import Navbar from '../Components/Navbar';
import MainContentClientes from '../Components/MainContent';
import MainContentDados from '../Components/MainContenteDados';













import { useNavigate } from 'react-router-dom';



const Homepage = () => {
  const [activeComponent, setActiveComponent] = useState('');
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleLinkClick = (component) => {
    if (component === 'login') {
      navigate('/login'); // Redireciona para a página de login
    } else {
      setActiveComponent(component); // Renderiza o componente dentro da página
    }
  };

  return (
    <div>
     <Navbar onLinkClick={handleLinkClick} />
      <Header />


      <main>
        {activeComponent === 'client' && <MainContentClientes />}
        {activeComponent === 'dados' && <MainContentDados />}
      </main>

     
    </div>
  );
};

export default Homepage;

