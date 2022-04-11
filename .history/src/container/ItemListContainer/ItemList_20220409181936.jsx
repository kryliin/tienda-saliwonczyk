import Item from "../ItemListContainer/Item"

function ItemList({ producto }) {
  return (
    <>
        {producto.map((prod)=>   <Item key={prod.id} producto={prod} className='col-md-3 p-1 importnt!'/> )}
    </>
  )
}

export default ItemList

