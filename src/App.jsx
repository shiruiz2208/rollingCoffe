import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
//import Administrador from './components/pages/Administrador';
import Inicio from './components/pages/Inicio';
import Error404 from './components/pages/Error404';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Administrador from './components/pages/Administrador';

function App() {
  //Administrador de rutas
  //path ---dominio---www.rollingCoffe.com/---path
  return (
   <BrowserRouter>
   <Menu></Menu>
<Routes>
  <Route exact path='/' elements ={<Inicio></Inicio>}></Route>
  <Route exact path='/administrador' elements ={<Administrador></Administrador>}></Route>
  <Route path='*' element={<Error404></Error404>}></Route>
</Routes>
<Footer></Footer>
   </BrowserRouter>
  )
}

export default App;
