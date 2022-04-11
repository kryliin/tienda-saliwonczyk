import { useCartContext } from "../../context/CartContext"


function Cart() {

  const { cartList, removeCart } = useCartContext()
  return (
    <div>
      <h1>Mis Compras</h1>
      {cartList.map(producto => <li key={producto.id} > nombre: {producto.name} - cantidad: {producto.cantidad} </li>)}
      <button className="btn btn-danger" onClick={removeCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart