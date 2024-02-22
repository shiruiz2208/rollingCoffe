import { Button, Card, CardTitle,Col} from 'react-bootstrap';
import cafeAmericano from '../../../assets/cafeAmericano.png'
const CardProducto = () => {
    return (
        <Col md={3} lg={3}>
          <Card className='m-1'>
            <Card.Img variant='top' src={cafeAmericano} />
            <Card.Body>
                <CardTitle className='text-verdecito'> Titulo</CardTitle>
                <Card.Text>
                    Caracteristicas del producto <br/>
                    <b>Precio: 150$</b>
                </Card.Text>
                <hr />
                <div className='d-flex justify-content-end'>
                    <Button variant='sucess'>Ver más</Button>
                </div>
            </Card.Body>
          </Card>
        </Col>
    );
};
export default CardProducto;