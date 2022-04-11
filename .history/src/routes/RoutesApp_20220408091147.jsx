import NavBar from '../components/NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
import ItemListContainer from '../container/ItemListContainer/ItemListConteiner'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Faq from '../components/Faq/faq'
import ItemDetailedConteiner from '../container/ItemDetailsConteiner/ItemDetailedConteiner'
import Cart from '../components/Cart/Cart'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import CartContextProvider from '../context/CartContext'

function RoutesApp() {

    return (
        <>
            <BrowserRouter>
                <CartContextProvider>
                    <NavBar />
                    <Titulo tituloProps='Alquileres Saliwonczyk' />


                    <Routes>
                        <Route
                            path="/"
                            element={<ItemListContainer
                                titulo={Titulo}
                                greeting='HOME'

                            />}
                        />
                        <Route
                            path="/categoria/:categoriaId"
                            element={<ItemListContainer
                                greeting='Bienvenidos a la Primer Tienda de Alquiler de Juegos de Mesa de la Ciudad'
                                titulo={Titulo}
                            />}
                        />
                        <Route path="/detalle/:detalleId" element={<ItemDetailedConteiner />} />
                        <Route path="/Faq" element={<Faq />} />
                        <Route path="/Quines" element={<QuienesSomos />} />
                        <Route path="/Cart" element={<Cart />} />

                        <Route path="/*" element={<Navigate to='/' replace />} />

                    </Routes>
                </CartContextProvider>
            </BrowserRouter>



        </>
    )
}

export default RoutesApp