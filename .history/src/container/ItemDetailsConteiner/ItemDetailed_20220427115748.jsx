import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/CartContext"
import './ItemDetailed.css'
import Container from 'react-bootstrap/Container'
import swal from 'bootstrap-sweetalert'

function ItemDetailed({ producto }) {
  const { addToCart } = useCartContext()

  function onAdd(cant) {
    swal({
      title: "Excelente!",
      text: "Se han Agregado " + cant + " Juegos a su Carrito",
      icon: "success",
      button: "Si",
      confirmButtonClass: "btn-success",
      buttonText: 'Si'
    });
    addToCart({ ...producto, cantidad: cant })
  }

  return (
    <>
      <h1>Detalles de {producto.nombre} </h1>
      <br />
      <Container>
        <div className='cartconteinerDetailed'>
          <div className='cartIzquierdaDetailed'>
            <div className='cartItem2' ><h2>Tipo Juego: {producto.categoria}</h2> </div>
            <div className='cartItem2' ><h3>{producto.descripcion}</h3>  </div>
          </div>

          <div className='cartDerechaDetailed'>
            <img className='imagenDetalle' src={producto.foto} alt='' />
            <br />
            Precio ${producto.precio}
            <br />
            Nos Quedan : {producto.cantidad}
            <br />
            <ItemCount
              stock={producto.cantidad}
              onAdd={onAdd}
              initial={0}
            />
          </div>
        </div>

      </Container>
    </>
  )
}
export default ItemDetailed