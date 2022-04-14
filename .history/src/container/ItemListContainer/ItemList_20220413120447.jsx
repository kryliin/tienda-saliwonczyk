import Item from "../ItemListContainer/Item"

function ItemList({ productos }) {
  return (
    <>
        {productos.map((prod)=>   <Item key={prod.id} productos={prod} /> )}
    </>
  )
}

export default ItemList

