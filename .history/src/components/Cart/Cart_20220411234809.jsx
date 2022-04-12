import { useCartContext } from "../../context/CartContext"
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Cart() {

  const { cartList, removeCart } = useCartContext()
  const [total] = useState(0)
  return (
    <Container fluid>
      <h1>Mis Compras</h1>
      <Row>
        <Col md={{ span: 6, offset: 3 }}> 
        {cartList.map(producto => <li key={producto.id} > nombre: {producto.name} - cantidad: {producto.cantidad} </li>)} 
         {cartList.map(producto =>  <li key={producto.id} > <h1>Total a Pagar $ {total = total + producto.precio}</h1> </li>)}
        </Col>
      </Row>
 
      <button className="btn btn-danger" onClick={removeCart}>Vaciar Carrito</button>
    </Container>
  )
}

export default Cart