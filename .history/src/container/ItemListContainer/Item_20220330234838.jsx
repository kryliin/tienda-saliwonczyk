import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetailedConteiner from '../ItemDetailsConteiner/ItemDetailedConteiner';
import { Route } from 'react-router';
import Cart from '../../components/Cart/Cart'


const Item = ({ producto }) => {

    const onAdd = (cantidad) => {
        alert('Se agrego al carrito ' + cantidad + ' juegos');
    };


    return (
        <div className="card w-90 h-90 mt-5 border border-primary shadow p-2 mb-5 bg-white rounded" >
            <div className="card-header">
                {`${producto.name} - ${producto.categoria}`}
            </div>

            <div className="card-body">

                <img src={producto.foto} alt='' className='w-50 h-50 d-inline-block' fluid />
            

                <Route path="/detalle/:detalleId" element={<ItemDetailedConteiner product={producto} />} />
                <Route path="/cart" element={<Cart />} />


                <br />
                <br />
                <h4 style={{ color: 'green' }}>${producto.price}</h4>
                <h4>Stock Disponible : {producto.cantidad}</h4>
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
    );
};

export default Item;