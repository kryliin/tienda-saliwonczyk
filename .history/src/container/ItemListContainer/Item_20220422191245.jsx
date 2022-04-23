import React from 'react';
import { Link } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ productos }) => {
    const { addToCart, cartList } = useCartContext()

    function onAdd(cant) {
        console.log(cant)
        console.log(productos)
        addToCart({ ...productos, cantidad: cant })
    }

    return (

        <div className='col-md-3 p-2'>
            <div className="card w-100 h-100 mt-5" >
                <div className="card-header">
                    <h3>{`${productos.nombre} - ${productos.categoria}`}</h3>
                </div>

                <div className="card-body">

                    <img src={productos.foto} alt='' className='w-50' />
                    <br />
                    <br />
                    <h4 style={{ color: 'green' }}>${productos.precio}</h4>
                    <h4>Stock Disponible : {productos.cantidad}</h4>
                </div>

                <div className="card-footer">


                    <ItemCount
                        stock={productos.cantidad}
                        onAdd={onAdd}
                        initial={0}
                    />



                    {/* <Link to={`/detalle`}>
                        <button className="btn btn-outline-primary btn-block">
                            Detalle
                        </button>
                    </Link> */}
                </div>

            </div>
        </div>

    );
};

export default Item;