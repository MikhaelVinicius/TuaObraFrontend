import React from 'react';


import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainContent from '../Components/MainContent';
import Navbar from '../Components/Navbar';
import MainContentClientes from '../Components/MainContent';
import MainContentDados from '../Components/MainContenteDados';

const Homepage = () => {
  return (
    <div>
   
   <Navbar/>
      <Header />

      
      <main>
        <MainContentDados />
      </main>

    
    </div>
  );
};

export default Homepage;
