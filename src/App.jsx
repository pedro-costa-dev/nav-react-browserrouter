import {useState} from 'react';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Header from './components/Header';

export default function App() {
  const [pagina, setPagina] = useState('inicio');

  return (
    <>
      <Header  >
        <button onClick={() => setPagina('inicio')}>Inicio</button>
        <button onClick={() => setPagina('sobre')}>Sobre</button>
       
      </Header >

       {pagina === 'inicio' && <Inicio /> }
       { pagina === 'sobre' && <Sobre />} 
       
      <Footer year="2026" companyName="Projeto Front End-Thiago" />
    </>
  );
}

