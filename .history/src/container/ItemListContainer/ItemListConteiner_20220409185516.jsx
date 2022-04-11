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
            {greeting}<hr />
            {loading ?
                <h2>Tirando Dados...</h2>
                :
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} className='row md-3'>
                    <ItemList producto={producto} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer


