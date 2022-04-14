import { useCartContext } from "../../context/CartContext"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore'



function Cart() {

  const { cartList, removeCart } = useCartContext()

  const generarOrden = async (e) => {
    e.preventDefault();

        // Nuevo objeto de orders    
        let orden = {}      
    
        orden.buyer = { name: 'Federico', email: 'f@gmail.com', phone: '023456987' }
        orden.total = precioTotal()
    
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name
            const precio = cartItem.price * cartItem.cantidad
            // const cantidad = cartItem.cantidad
            
            return {id, nombre, precio}   
        })   

        // creación de un documento
        const db = getFirestore() 
        const queryCollection = collection(db, 'orders')
        await addDoc(queryCollection, orden)
        .then(({id}) => console.log( id ))
        // .catch
        // .finally

        // update, modificar un archivo 

        // const queryUpdate =  doc(db, 'productos', '4jNlWgWGlGSO7WGASegG')
        // updateDoc(queryUpdate, {
        //     stock : 100
        // })
        // .then(resp => console.log('actualizado'))


        // console.log(orden)

        // actualizar el stock
        const queryCollectionStock = collection(db, 'productos')

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
        {cartList.map(producto => <li key={producto.id} > nombre: {producto.name} - cantidad: {producto.cantidad} </li>)} 
        </Col>
      </Row>
 
      <button className="btn btn-danger" onClick={removeCart}>Vaciar Carrito</button>
      <button className="btn btn-susses" onClick={generarOrden}>Generar orden</button>
    </Container>
  )
}

export default Cart