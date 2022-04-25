import { useCartContext } from "../../context/CartContext"
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import './Cart.css'
import ItemListContainer from "../../container/ItemListContainer/ItemListConteiner"
import Image from 'react-bootstrap/Image'
import IconoEliminar from '../logos/eliminar.png'

function Cart() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    cel: '',
    dir: '',
    dias: ''
  })

  const { cartList, removeCart, totalAPagar, totalJuegos } = useCartContext()
  const [isLoading, setLoading] = useState(false);

  const generarOrden = async (e) => {
    e.preventDefault();

    // Nuevo objeto de orders    
    let orden = {}

    orden.buyer = formData
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
    const queryCollection = collection(db, 'ordenesDeAlquiler')
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
      .finally(() => alert('Se Ha Generado Su Orden, en breve le mandaremos un mail a: ' + orden.buyer.email))

    batch.commit()
  }

  function timeOutEjemplo() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  useEffect(() => {
    if (isLoading) {
      timeOutEjemplo().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);


  const handleClick = () => setLoading(true);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }


  return (
    <Container>
      <h1>Mis Compras</h1>

      <div className='cartconteiner'>
        {cartList.length !== 0 ? (
          <div className='cartIzquierda'>
            {cartList.map(producto => <div className='cartItem' key={producto.id} >  <img src={producto.foto} alt='' />
              <div className='cartDetalle' > <p>{producto.nombre}</p>
          
                <p>SubTotal ${producto.precio * producto.cantidad}</p>
              </div>
              <div className="carro_f_cant">
                <p>Cantidad:</p>
                <input className="input_cant" type="number" value={producto.cantidad} />
                <Image src={IconoEliminar} className='iconoEliminar' alt='Eliminar' rounded="true" />
              </div>
            </div>)}
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

          Juegos (Cant): {totalJuegos()}
          <br />
          Total ($) {totalAPagar()}
          <br />
          <Container>
            <form
              onSubmit={generarOrden}
            >
              <input className='inputForm' name='nombre' type="text" placeholder='Nombre Completo'
                onChange={handleChange}
                value={formData.name}
              />
              <input className='inputForm' name='email' type="text" placeholder='Email'
                onChange={handleChange}
                value={formData.email}
              />
              <input className='inputForm' name='cel' type="text" placeholder='Celular'
                onChange={handleChange}
                value={formData.cel}
              />
              <input className='inputForm' name='dir' type="text" placeholder='Direccion Completa'
                onChange={handleChange}
                value={formData.dir}
              />
              <input className='inputForm' name='dias' type="text" placeholder='Cantidad de Días'
                onChange={handleChange}
                value={formData.dias}
              />
              <br />
              <button className="btn btn-success" size="lg"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}>
                {isLoading ? 'Gerando......' : 'Generar orden'}</button>
            </form>
          </Container>


        </div>

      </div>
      <button className="btn btn-danger" onClick={removeCart}>Vaciar Carrito</button>
    </Container>
  )
}

export default Cart