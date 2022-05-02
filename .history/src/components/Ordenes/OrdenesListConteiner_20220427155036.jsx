import React, { useState, useEffect } from "react";
import { getDocs, getFirestore, collection,query, where } from 'firebase/firestore'
import OrdenesList from './OrednesList.jsx'
import { useParams } from 'react-router-dom'

export default function Ordenes() {
    const [ordenes, setOrdenes] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'ordenesDeAlquiler')
        const queryFilter = id ?
            query(queryCollection,
                where('id', '==', id)
            )
            :
            queryCollection

        getDocs(queryFilter)
            .then(resp => setOrdenes(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])


    return (
        <div className="border">
            {loading ?
                <h2>Buscando Ordenes...</h2>
                :
                <>
                    {ordenes.id}
                    {ordenes.buyer}
                    {ordenes.items}
                    {ordenes.total}
                </>
            }
        </div>

    );
}
