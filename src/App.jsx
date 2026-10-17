import {useState} from 'react';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [pagina, setPagina] = useState('inicio');

  return (
    <> 
      <Header >
        <nav>
         <Link to="/">Início</Link> |{" "}
         <Link to="/sobre">Sobre</Link> |{" "}
        </nav>
       </Header>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer year="2026" companyName="PFE 2026.2-Thiago" />
    </>
  );
}

