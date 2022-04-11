import { useCartContext } from "../../context/CartContext"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Cart() {

  const { cartList, removeCart } = useCartContext()
  return (



    <Container fluid>
      <h1>Mis Compras</h1>
      <Row>
        <Col md={{ span: 6, offset: 3 }}> 
        {cartList.map(producto => <li key={producto.id} > nombre: {producto.name} - cantidad: {producto.cantidad} </li>)}
        </Col>
      </Row>
      <button className="btn btn-danger" onClick={removeCart}>Vaciar Carrito</button>
    </Container>



  )
}

export default Cart