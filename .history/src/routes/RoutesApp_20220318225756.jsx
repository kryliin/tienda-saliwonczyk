import NavBar from '../components/NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
import ItemListContainer from '../container/ItemListContainer/ItemListConteiner'
import Count from '../container/ItemListContainer/ItemCount/ItemCount.js'

function RoutesApp() {

    return (
        <>
            <NavBar />
            <Titulo tituloProps='Alquileres Saliwonczyk' />

            <ItemListContainer
                titulo={Titulo}
                greeting='Bienvenidos a la Primer Tienda de Alquiler de Juegos de Mesa de la Ciudad'

            />
            <Count
                stock={12}
            />
        </>
    )
}

export default RoutesApp