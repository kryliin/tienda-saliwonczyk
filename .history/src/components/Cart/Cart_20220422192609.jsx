import { useCartContext } from "../../context/CartContext"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import './Cart.css'

function Cart() {

  const { cartList, removeCart, totalAPagar } = useCartContext()

  const generarOrden = async (e) => {
    e.preventDefault();

    // Nuevo objeto de orders    
    let orden = {}

    orden.buyer = { name: 'Christian', email: 'kryliin@gmail.com', phone: '099419799' }
    orden.total = totalAPagar()

    orden.items = cartList.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.nombre
      const precio = cartItem.precio * cartItem.cantidad
      // const cantidad = cartItem.cantidad

      return { id, nombre, precio }
    })

    // creación de un documento
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    await addDoc(queryCollection, orden)
      .then(({ id }) => console.log(id))


    // actualizar el stock
    const queryCollectionStock = collection(db, 'Juegos')

    const queryActulizarStock = await query(
      queryCollectionStock, //                   ['jlksjfdgl','asljdfks'] -> ejemplo del map ,  
      where(documentId(), 'in', cartList.map(it => it.id)) // in es que estén en ..         
    )

    const batch = writeBatch(db)

    await getDocs(queryActulizarStock)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
      })))
      .finally(() => console.log('actulalizado'))

    batch.commit()
  }

  return (
    <Container>
      <h1>Mis Compras</h1>

      <div className='cartconteiner'>
        <div className='cartIzquierda'>
          <h3>{cartList.map(producto => <li key={producto.id} > {producto.nombre} - Cantidad: {producto.cantidad}  ${producto.precio * producto.cantidad}</li>)} </h3>
        </div>
        <div className='cartDerecha'>
          <button className="btn btn-danger" onClick={removeCart}>Vaciar Carrito</button>
          <button className="btn btn-susses" onClick={generarOrden}>Generar orden</button>
        </div>
      </div>

      {/*       <Row>
        <Col md={{ span: 6, offset: 3 }}> 
      
        </Col>
      </Row>
      <h2>TOTAL $ {totalAPagar()}</h2>

      */}
    </Container>
  )
}

export default Cart