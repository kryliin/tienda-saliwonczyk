import React from "react";
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


export default function Ordenes() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    //const [items, setItems] = useState([])

   

    useEffect(() => {
        const querydb = getFirestore()
        const queryProd = doc(querydb, 'Juegos')
    
        getDoc(queryProd)
          .then(resp => setProducto({ id: resp.id, ...resp.data() }))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
      }, [detalleId])









    return (
        <h1>Ordenes</h1>

    );
}
