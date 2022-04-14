import { useCartContext } from "../../context/CartContext"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore'



function Cart() {

  const { cartList, removeCart, precioTotal } = useCartContext()

  const generarOrden = async (e) => {
    e.preventDefault();

        // Nuevo objeto de orders    
        let orden = {}      
    
        orden.buyer = { name: 'Christian', email: 'kryliin@gmail.com', phone: '099419799' }
        orden.total = precioTotal()
    
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio * cartItem.cantidad
            // const cantidad = cartItem.cantidad
            
            return {id, nombre, precio}   
        })   

        // creación de un documento
        const db = getFirestore() 
        const queryCollection = collection(db, 'orders')
        await addDoc(queryCollection, orden)
        .then(({id}) => console.log( id ))


        // actualizar el stock
        const queryCollectionStock = collection(db, 'Juegos')

        const queryActulizarStock = await query(
            queryCollectionStock, //                   ['jlksjfdgl','asljdfks'] -> ejemplo del map ,  
            where( documentId() , 'in', cartList.map(it => it.id) ) // in es que estén en ..         
        )

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        }) ))
        .finally(()=> console.log('actulalizado'))

        batch.commit()
}

  return (
    <Container fluid>
      <h1>Mis Compras</h1>
      <Row>
        <Col md={{ span: 6, offset: 3 }}> 
        <h3>{cartList.map(producto => <li key={producto.id} > {producto.nombre} - Cantidad: {producto.cantidad}  ${producto.precio*producto.cantidad}</li>)} </h3>
        </Col>
      </Row>
      <h2>{precioTotal}</h2>
   {/* formulario */}
      <button className="btn btn-danger" onClick={removeCart}>Vaciar Carrito</button>
      <button className="btn btn-susses" onClick={generarOrden}>Generar orden</button>
    </Container>
  )
}

export default Cart