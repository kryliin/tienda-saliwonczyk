import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/CartContext"
import './ItemDetailed.css'
import Container from 'react-bootstrap/Container'

function ItemDetailed({ producto }) {
  const { addToCart, cartList } = useCartContext()

  function onAdd(cant) {
    console.log(cant)
    console.log(producto)
    addToCart({ ...producto, cantidad: cant })
  }

  console.log('producto' + producto)


  return (
    <>
         <h1>Detalles de {producto.nombre} </h1>
         <br/>
      <Container>
      <div className='cartconteiner'>
        <div className='cartIzquierda'>
          <div className='cartItem' >Tipo Juego: {producto.categoria} </div>
          <div className='cartItem' > Detalles: {producto.descripcion}  </div>
        </div>
        <div className='cartDerecha'>
        <img className='imagenDetalle' src={producto.foto} alt='' /> 
        <br/>
          Precio ${producto.precio}
          <br/>
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

      {/*   <div className='col-md-3 p-2'>
        <div className="card w-100 mt-5 " >
          <div className="card-header">
            {`${producto.nombre} - ${producto.categoria}`}
          </div>

          <div className="card-body">
            <img src={producto.foto} alt='' className='w-50' />
            {producto.descripcion}
            {producto.observaciones}
            <br />
            <br />
            <h4 style={{ color: 'green' }}>${producto.precio}</h4>
            <h4>Nos Quedan : {producto.cantidad}</h4>
          </div>
          <br />
          <div className="card-footer">
            <ItemCount
              stock={producto.cantidad}
              onAdd={onAdd}
              initial={0}
            />
          </div>
        </div>
      </div> */}
    </>
  )
}
export default ItemDetailed