import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Inicio from './components/pages/Inicio';
import Error404 from './components/pages/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Administrador from './components/pages/Administrador';

function App() {
  //Administrador de rutas
  //path ---dominio---www.rollingCoffe.com/---path
  return (
   <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route path="/administrador" element={<Administrador></Administrador>}></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
   </BrowserRouter>
  )
}

export default App;
