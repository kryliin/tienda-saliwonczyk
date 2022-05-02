import React, { useState, useEffect } from "react";
import { doc, getFirestore, getDoc } from 'firebase/firestore'
import OrdenesListConteiner from './OrdenesListCOnteiner'

export default function Ordenes() {
    const [ordenes, setOrdenes] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const db = getFirestore();
        const itemCollection = doc(db, "ordenesDeAlquiler", 'J6a64aD84psCWAiLb8VG');

        getDoc(itemCollection)
            .then((resp) => {
                if (resp.exists()) {
                    setOrdenes({ id: resp.id, ...resp.data() })
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])


    return (
        <div className="border">
            {loading ?
                <h2>Buscando Ordenes...</h2>
                :
                <>
                    <OrdenesListConteiner ordenes={ordenes} /> 
                </>
            }
        </div>

    );
}
