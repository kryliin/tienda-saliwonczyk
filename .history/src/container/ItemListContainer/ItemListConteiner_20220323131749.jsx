import Item from './Item'

function ItemListContainer({ greeting }) {

    
    return (
        <div>
            {greeting}<hr />
           <Item/>

        </div>
    )
}

export default ItemListContainer