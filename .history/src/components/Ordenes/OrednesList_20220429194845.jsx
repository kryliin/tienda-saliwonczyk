import Orden from "./Orden.jsx"

function ItemList({ ordenes }) {
  return (
    <>
      {ordenes.map((order) => <Orden key={order.id} ordenes={order}/>)}
    </>
  )
}

export default ItemList

   