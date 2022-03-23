import React from "react";
import IconoCarrito from './carrito.png'
import Image from 'react-bootstrap/Image'

function CartWidget() {
 
  return (
    <div className="nav-cart">
      <Image src={IconoCarrito} width="29" alt="Carrito"  rounded="true" />
    </div>
  );
}export default CartWidget
