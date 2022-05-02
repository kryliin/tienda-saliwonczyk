import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import cargando from '../../components/logos/42a8d4625aeb088c45eba5a84ca36325.gif'

function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    //const [items, setItems] = useState([])

    const { categoriaId } = useParams()
    
    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'Juegos')
        const queryFilter = categoriaId ?
            query(queryCollection,
                where('categoria', '==', categoriaId)
            )
            :
            queryCollection

        getDocs(queryFilter)
            .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [categoriaId])


    return (
        <div>
            {greeting}<hr />
            {loading ?
            
                <img className='gif' src={cargando} alt=''  />
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <ItemList productos={productos} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer


