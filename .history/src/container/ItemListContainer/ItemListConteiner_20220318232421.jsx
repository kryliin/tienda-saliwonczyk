import ItemListCount from '../container/ItemListContainer/ItemListCount/ItemListCount'
function ItemListContainer({greeting, titulo}) {

    return (
        <>
        <div>
            {greeting}
            {titulo}
        </div> 
            <ItemListCount
            stock={12} />
            </>
    )
}

export default ItemListContainer