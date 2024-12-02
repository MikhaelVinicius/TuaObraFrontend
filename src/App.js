import logo from './logo.svg';
import './App.css';
import Homepage from './Paginas/Homepage';
//import Perfil from './Paginas/Perfil';
//import CasaCadastro from './Paginas/CasaCadastro';
import Login from './Paginas/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
