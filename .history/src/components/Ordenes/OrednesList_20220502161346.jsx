import Orden from "./Orden.jsx"

function ItemList({ ordenes }) {
  return (
    <>
      <div>
        {ordenes.map((order) =>  <Orden  ordenes={order} />        )}
      </div>
    </>
  )
}

export default ItemList

