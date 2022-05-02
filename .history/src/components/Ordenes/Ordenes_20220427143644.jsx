import React, { useState, useEffect } from "react";
import { collection, getFirestore, getDoc } from 'firebase/firestore'
/* import Orden from './Orden' */

export default function Ordenes() {
    const [ordenes, setOrdenes] = useState({})
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "ordenesDeAlquiler");

        getDoc(itemCollection)
            .then(or => setOrdenes({ id: or.id, ...or.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    console.log("ordenes" + ordenes)
    return (
        <div className="border">
            {loading ?
                <h2>Buscando Ordenes...</h2>
                :
                <>
               {/*      {ordenes.map((order) => <Orden key={order.id} ordenes={order} />)} */}
                </>
            }
        </div>

    );
}