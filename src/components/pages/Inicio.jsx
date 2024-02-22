import { Container, Row } from "react-bootstrap";
import CardProducto from './Producto/CardProducto'
import BannerInicio from "../../assets/bannerInicio.png"

const Inicio = () =>{
    return (
        <>
        <img src={BannerInicio} alt="Banner Rolling Coffee"/>
        <Container className="mainContainer">
        <section>
            <h2 className="display-3" >Nuestros productos</h2>
            <hr/>
            <Row className="justify-content-around">
                <CardProducto ></CardProducto>
                <CardProducto ></CardProducto>
                <CardProducto ></CardProducto>
                <CardProducto ></CardProducto>
            </Row>
                </section>
                </Container>

        </>
    );
};

export default Inicio;