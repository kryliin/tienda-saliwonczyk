import React from "react";
import IconoCarrito from "../Imagenes/carrito.png";
import Image from 'react-bootstrap/Image'

export default function CartWidget() {
 
  return (
    <div className="nav-cart">
      <Image src={IconoCarrito} width="29" alt="Carrito"  rounded="true" />
    </div>
  );
}