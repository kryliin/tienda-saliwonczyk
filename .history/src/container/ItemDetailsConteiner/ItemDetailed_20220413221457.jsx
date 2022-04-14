import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/CartContext"




function ItemDetailed({ producto }) {
  const { addToCart, cartList } = useCartContext()

  function onAdd(cant) {
    console.log(cant)
    console.log(producto)
    addToCart({ ...producto, cantidad: cant })
  }

  console.log('cartList antes' + cartList)


  return (
    <>

      <div>
        <div className="d-flex justify-content-around" >
          <div className="card-header">
            {`${producto.nombre} - ${producto.categoria}`}
          </div>

          <div className="card-body">

            <img src={producto.foto} alt='' className='w-25 h-auto d-inline-block' />

            {producto.descripcion}
            {producto.observciones}

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
      </div>
    </>
  )
}
export default ItemDetailed