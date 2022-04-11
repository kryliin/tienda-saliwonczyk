import { useCartContext } from "../../context/CartContext"


function Cart() {

  const { cartList, removeCart } = useCartContext()
  return (
    <div>
      {cartList.map(producto => <li key={producto.id} > nombre: {producto.name} - cantidad: {producto.cantidad} </li>)}
      <button variant="danger" onClick={removeCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart