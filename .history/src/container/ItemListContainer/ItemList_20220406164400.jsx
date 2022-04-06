import Item from "../ItemListContainer/Item"

function ItemList({ producto }) {
  return (
    <>
        {producto.map((prod)=>   <Item key={prod.id} producto={prod} /> )}
    </>
  )
}

export default ItemList

