import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home'
import Cadastro from './Pages/Cadastro'
import  Reserva  from './Pages/Reserva';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Layout />}>

      <Route index element={<Home />} />
      <Route path='/livros' element={<Cadastro />} />
      <Route path='/reserva' element={<Reserva />}/>


      </Route>



      </Routes>      
      
      
      
      </BrowserRouter>





    </div>
  );
}

export default App;