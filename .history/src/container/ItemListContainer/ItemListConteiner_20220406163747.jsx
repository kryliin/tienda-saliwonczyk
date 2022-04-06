import ItemList from './ItemList'
import React, { useState, useEffect } from "react";
import { getProductos } from '../../helpers/getProductos.js'
import { useParams } from 'react-router-dom'


function ItemListContainer({ greeting }) {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        if (categoriaId) {
            getProductos //simulacion
                //.then((data) => {if (data.size === 0) {alert("No hay resultados");}
                .then(resp => setProducto(resp.filter(item => item.categoria === categoriaId)))
                .catch((error) => {
                    console.error("Error al traer los datos", error);
                })
                .finally(() => setLoading(false))
        } else {
            getProductos //simulacion
                //.then((data) => {if (data.size === 0) {alert("No hay resultados");}
                .then(resp => setProducto(resp))
                .catch((error) => {
                    console.error("Error al traer los datos", error);
                })
                .finally(() => setLoading(false))
        }
    }, [categoriaId])

    return (
        <div>
        {loading ?
            <h2>Tirando Dados...</h2>
            :
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              //  {producto.map((producto) => <div key={producto.id} className='col-md-3 p-1'>
                    <ItemList producto={producto}
                    />
               // </div>
                )}
            </div>
        }
    </div>
    )
}

export default ItemListContainer