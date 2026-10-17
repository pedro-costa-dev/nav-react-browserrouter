import {useState} from 'react';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Header from './components/Header';
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  const [pagina, setPagina] = useState('inicio');

  return (
    <>
        <nav style={{ marginBottom: 20 }}>
         <Link to="/">Início</Link> |{" "}
         <Link to="/sobre">Sobre</Link> |{" "}
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
    </>
  );
}

