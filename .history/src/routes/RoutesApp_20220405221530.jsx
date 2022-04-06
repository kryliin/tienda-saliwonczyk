import NavBar from '../components/NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
import ItemListContainer from '../container/ItemListContainer/ItemListConteiner'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Faq from '../components/Faq/faq'
import ItemDetailedConteiner from '../container/ItemDetailsConteiner/ItemDetailedConteiner'
import CartWidget from '../components/NavBar/CartWidget'

function RoutesApp() {

    return (
        <>
          <BrowserRouter>
          <NavBar />
            <Titulo tituloProps='Alquileres Saliwonczyk' />


            <Routes>
                <Route 
                    path="/" 
                    element={  <ItemListContainer
                        titulo={Titulo}
                        greeting='Bienvenidos a la Primer Tienda de Alquiler de Juegos de Mesa de la Ciudad'
        
                    />  } 
                />              
                <Route 
                    path="/categoria/:categoriaId" 
                    element={<ItemListContainer 
                        greeting='Hola soy ItemListContainer' 
                        titulo= { Titulo }
                    />} 
                />              
                <Route path="/detalle/:detalleId" element={<ItemDetailedConteiner />} />
                <Route path="/Faq" element={<Faq />} />
                <Route path="/NavBar/CartWidget" element={<CartWidget />} />
        
                <Route path="/*" element={<Navigate to='/' replace/> } />
                
            </Routes>
        </BrowserRouter>
       
            
        
        </>
    )
}

export default RoutesApp