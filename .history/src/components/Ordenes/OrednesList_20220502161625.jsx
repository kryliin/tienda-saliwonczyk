import Orden from "./Orden.jsx"

function ItemList({ ordenes }) {
  return (
    <>
      <div>
        {ordenes.map((order) =>  <Orden key={order.id} ordenes={order} />        )}
      </div>
    </>
  )
}

export default ItemList

