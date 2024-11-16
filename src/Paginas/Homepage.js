import React from 'react';


import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainContent from '../Components/MainContent';
import Navbar from '../Components/Navbar';

const Homepage = () => {
  return (
    <div>
   
   <Navbar/>
      <Header />

      
      <main>
        <MainContent />
      </main>

    
    </div>
  );
};

export default Homepage;
