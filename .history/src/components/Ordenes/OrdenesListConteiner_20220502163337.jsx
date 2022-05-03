import React, { useState, useEffect } from "react";
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore'
import OrdenesList from './OrednesList.jsx'
import { useParams } from 'react-router-dom'
import swal from 'bootstrap-sweetalert'

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
            .then(resp => setOrdenes(resp.docs.map(items => ({ id: items.id, ...items.data() }))))
            .catch(err => swal({
                title: "Oops!",
                text: err,
                icon: "error",
                button: "Entiendo",
                confirmButtonClass: "btn-warning",
                buttonText: 'Entiendo'
            }))
            .finally(() => setLoading(false))
    }, [id])

    console.log("ordenes" + ordenes)
    return (
        <div className="border">
            {loading ?
                <h2>Buscando Ordenes...</h2>
                :
                <>
                    <OrdenesList ordenes={ordenes} />
                </>
            }
        </div>

    );
}