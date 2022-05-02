import Orden from "./Orden.jsx"

function ItemList({ ordenes }) {
  return (
    <>
      console.log("ordenes" + ordenes.map)
      {ordenes.map((order) => <Orden key={order.id} ordenes={order}/>)}
    </>
  )
}

export default ItemList

   