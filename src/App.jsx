import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
//import Administrador from './components/pages/Administrador';
import Inicio from './components/pages/Inicio';

function App() {
  return (
    <>
      <Menu></Menu>
       <Inicio></Inicio>
       {/*<Administrador></Administrador>/** */}
            <Footer></Footer>
    </>
  );
}

export default App;
