import ItemList from './ItemList'

function ItemListContainer({ greeting }) {

    
    return (
        <div>
            {greeting}<hr/>
           <ItemList/>

        </div>
    )
}

export default ItemListContainer