import Item from "../ItemListContainer/Item"

function ItemList({ producto }) {
  return (
    <>
        {producto.map((prod)=>   <Item key={prod.id} producto={prod} className="md-3" /> )}
    </>
  )
}

export default ItemList

