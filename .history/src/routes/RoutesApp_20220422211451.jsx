import NavBar from '../components/NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
import ItemListContainer from '../container/ItemListContainer/ItemListConteiner'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Faq from '../components/Faq/faq'
import ItemDetailedConteiner from '../container/ItemDetailsConteiner/ItemDetailedConteiner'
import Cart from '../components/Cart/Cart'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import CartContextProvider from '../context/CartContext'
import Contacto from '../components/Contacto/Contacto'
import Footer from '../components/Footer/Footer'
import Container from 'react-bootstrap/Container'

function RoutesApp() {

    return (
        <>

            <BrowserRouter>
                <CartContextProvider>
                    <NavBar />
                   
                        <Titulo tituloProps='Alquileres Saliwonczyk' />
                        <Container>
                        <Routes>
                            <Route
                                path="/categoria/:categoriaId"
                                element={<ItemListContainer
                                    greeting='Bienvenidos....'
                                    titulo={Titulo}
                                />}
                            />
                            <Route path="/detalle/:detalleId" element={<ItemDetailedConteiner />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/quines" element={<QuienesSomos />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/contacto" element={<Contacto />} />
                            <Route path="/*" element={<Navigate to='/' replace />} />

                            <Route
                                path="/"
                                element={<ItemListContainer
                                    titulo={Titulo}
                                    greeting='Bienvenidos a la Primer Tienda de Alquiler de Juegos de Mesa de la Ciudad'
                                />}
                            />

                        </Routes>
                    </Container>
                </CartContextProvider>
                <br />
                <Footer />
            </BrowserRouter>

        </>
    )
}

export default RoutesApp