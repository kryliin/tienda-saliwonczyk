import ItemList from './ItemList'
import React, { useState, useEffect } from "react";
import { getProductosID } from '../../helpers/getProductos.js'
import { useParams } from 'react-router-dom'


function ItemListContainer({ greeting }) {
    const [unProducto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        if (categoriaId) {
            getProductosID //simulacion
                //.then((data) => {if (data.size === 0) {alert("No hay resultados");}
                .then(resp => setProducto(resp.filter(item => item.categoria === categoriaId)))
                .catch((error) => {
                    console.error("Error al traer los datos", error);
                })
                .finally(() => setLoading(false))
        } else {
            getProductosID //simulacion
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
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ItemList productos={productos} />
            </div>
        </div>
    )
}

export default ItemListContainer