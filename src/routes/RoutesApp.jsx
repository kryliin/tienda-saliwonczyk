import NavBar from '../components/NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
import ItemListContainer from '../container/ItemListConteiner'

function RoutesApp() {

    return (
        <>
            <NavBar  />          
            <Titulo tituloProps='Alquileres Saliwonczyk'/>

            <ItemListContainer 
                greeting='Bienvenidos a la Primer Tienda de Alquiler de Juegos de Mesa' 
                titulo= { Titulo }
            />
        </>
    )
}

export default RoutesApp