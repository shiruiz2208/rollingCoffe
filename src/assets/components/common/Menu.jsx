import {Navbar,Nav,Container} from "react-bootstrap";
import logo from '../../../assets/Coffee_Logo.png';

const Menu = () => {
    return (
     <Navbar expand="lg" className="bg-body-tertiary">
     <Container>
     <Navbar.Brand href="#home"><img src={logo} alt="Logo de Rolling Coffe" className="img-fluid" width={150}/></Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="me-auto">
     <Nav.Link href="#home">Inicio</Nav.Link>
     <Nav.Link href="#link">Administardor</Nav.Link>
     <Nav.Link href="#link">Registro</Nav.Link>
     <Nav.Link href="#link">Login</Nav.Link>                    
     </Nav>
     </Navbar.Collapse>
     </Container>
     </Navbar>
     );
    }
    

export default Menu;