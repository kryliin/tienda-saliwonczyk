import { useCartContext } from "../../context/CartContext"
import ListGroup from 'react-bootstrap/ListGroup'



function Cart() {

  const { cartList, removeCart } = useCartContext()
  return (
    <div>
      <h1>Mis Compras</h1>
      <ListGroup className="row row-md-3">
        <ListGroup.Item>    {cartList.map(producto => <li key={producto.id} > nombre: {producto.name} - cantidad: {producto.cantidad} </li>)}</ListGroup.Item>
      </ListGroup>
      <button className="btn btn-danger" onClick={removeCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart