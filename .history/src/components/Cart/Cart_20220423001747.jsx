import { useCartContext } from "../../context/CartContext"
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import './Cart.css'
import Form from 'react-bootstrap/Form'
import ItemListContainer from "../../container/ItemListContainer/ItemListConteiner"

function Cart() {

  const { cartList, removeCart, totalAPagar, cantidadTotalItem } = useCartContext()

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
      .finally(() => alert('Se Ha Generado Su orden Señor' + orden.buyer.name))

    batch.commit()
  }

  return (
    <Container>
      <h1>Mis Compras</h1>

      <div className='cartconteiner'>
        {cartList.length !== 0 ? (
          <div className='cartIzquierda'>
            {cartList.map(producto => <div className='cartItem' key={producto.id} >  <img src={producto.foto} alt='' /> <div className='cartDetalle' > <p>{producto.nombre}</p>  <p>Cantidad: {producto.cantidad} - SubTotal ${producto.precio * producto.cantidad}</p></div></div>)}
          </div>
        ) : (
          <>
            <div className='cartconteiner'>
              <div className='cartIzquierda'>
                <h2>Su Carrito Esta Vacio</h2>
                <Link className="btn btn-dark" to="/" element={<ItemListContainer />}>Ir a Tienda</Link>
              </div>
            </div>
          </>
        )}
        <div className='cartDerecha'>
          <Container>
            <Form >
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre </Form.Label>
                <Form.Control type="string" placeholder="Nombre Completo" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="mail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="telefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="string" placeholder="Tel" />
              </Form.Group>
            </Form>
          </Container>
          Juegos (Cant): {cantidadTotalItem()}
          <br />
          Total ($) {totalAPagar()}
          <br />
          <button className="btn btn-success" onClick={generarOrden}>Generar orden</button>
        </div>

      </div>
      <button className="btn btn-danger" onClick={removeCart}>Vaciar Carrito</button>
    </Container>
  )
}

export default Cart