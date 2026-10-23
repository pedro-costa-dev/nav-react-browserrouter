
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contato from './components/contato';




export default function App() {
  return (
    <> 
      <Header >
        <nav>
         <Link to="/">Início</Link> |{" "}
         <Link to="/sobre">Sobre</Link> |{" "}
         <Link to="/contato">Contato</Link> |{""}
        </nav>
       </Header>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
        <Footer year="2026" companyName="PFE 2026.2-Thiago" />
    </>
  );
}

