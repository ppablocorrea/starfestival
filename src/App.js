import logo from './logo.svg';
import './App.css';
import Menu from './Componentes/Menu';
import PiePagina from './Componentes/PiePagina';
import InicioPagina from './Paginas/InicioPagina';
import ShowsPagina from './Paginas/ShowsPagina';
import SponsorsPagina from './Paginas/SponsorsPagina';
import ContactoPagina from './Paginas/ContactoPagina';
import TicketsPagina from './Paginas/TicketsPagina';
import LanzamientosPagina from './Paginas/LanzamientosPagina';

import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu/>
      <div className='container-fluid pt-5'>
        
        <Router>
          <Routes>
            <Route path='/' element={<InicioPagina />}/> 
            <Route path='/shows' element={<ShowsPagina />}/>
            <Route path='/tickets' element={<TicketsPagina />}/>
            <Route path='/lanzamientos' element={<LanzamientosPagina />}/>
            <Route path='/sponsors' element={<SponsorsPagina />}/>
            <Route path='/contacto' element={<ContactoPagina />}/>
          </Routes>
        </Router>
      
      </div>
      <PiePagina/>
    </div>
  );
}

export default App;
