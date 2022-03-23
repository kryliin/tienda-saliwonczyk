import React from "react";
import IconoCarrito from './carrito.png'
import Image from 'react-bootstrap/Image'

function CartWidget(name) {
 
  return (
    <div className="nav-cart">
      <Image src={IconoCarrito} width="29" alt='Carrito' rounded="true" />{name}
    </div>
  );
}export default CartWidget
