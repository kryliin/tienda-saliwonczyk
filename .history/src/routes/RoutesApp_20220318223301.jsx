import NavBar from '../components/NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
import ItemListCount from '../container/ItemListContainer/ItemListCount/ItemListCount'
import ItemListContainer from '../container/ItemListContainer/ItemListConteiner'

function RoutesApp() {

    return (
        <>
            <NavBar />
            <Titulo tituloProps='Alquileres Saliwonczyk' />

            <ItemListContainer
                titulo={Titulo}
                greeting='Bienvenidos a la Primer Tienda de Alquiler de Juegos de Mesa de la Ciudad'

            />
            <ItemListCount
                stock={12} />
        </>
    )
}

export default RoutesApp