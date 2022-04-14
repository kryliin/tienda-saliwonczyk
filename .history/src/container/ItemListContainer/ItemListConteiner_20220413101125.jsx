import ItemList from './ItemList'
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'

function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [bool, setBool] = useState(true)
    //const [items, setItems] = useState([])

    // hook de react router dom
    const { categoriaId } = useParams()

    useEffect(()=>{
        const querydb = getFirestore() 
        const queryCollection = collection(querydb, 'juegos')
        const queryFilter = query(queryCollection, 
            // where('price','>=', 1500)
            where('categoria','==', 'estrategia'),            
            limit(1)
            // orderBy('name', 'asc')
        )

        getDocs(queryFilter)
        .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) 
    }, [])


 //ejemplo de evento
 const handleClick=(e)=>{
    e.preventDefault() 
    setBool(!bool)
}

const handleAgregar=()=>{
    setProductos([
        ...productos,
        { id: "8", name: "Gorra 7", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 2 }
    ])
}


    return (
        <div>
            {greeting}<hr />
            <button onClick={handleClick}>Cambiar estado </button>           
            <button onClick={handleAgregar}>Agregar Item </button>
            {loading ?
                <h2>Tirando Dados...</h2>
                :
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} className='col-md-4 p-1'>
                    <ItemList producto={producto} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer


