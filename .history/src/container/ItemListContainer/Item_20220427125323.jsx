import React from 'react';
import { Link } from "react-router-dom"
import './Item.css'
const Item = ({ productos }) => {


    return (
        <div className='col-md-3 p-2'>
            <div className="card cardItem" >
                <div className="card-header font-header">
                    {productos.nombre}
                    <div className="font-header2">
                        {productos.categoria}
                    </div>
                </div>

                <div className="card-body">
                    <img src={productos.foto} alt='' className='w-50' />
                    <br />
                    <br />
                    <h4 style={{ color: 'green' }}>${productos.precio}</h4>
                    <h4>Stock Disponible : {productos.cantidad}</h4>
                </div>

                <div className="card-footer">
                    <Link to={`/detalle/${productos.id}`}>
                        <button className="btn btn-outline-success btn-block">
                            Detalle
                        </button>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Item;