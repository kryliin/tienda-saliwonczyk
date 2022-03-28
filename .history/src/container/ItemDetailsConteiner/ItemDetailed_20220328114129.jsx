
function ItemDetailed ({ producto }) {
    return (
      <>
        <div>{producto.name}</div>
        <div>{producto.price}</div>
        <div>{producto.descripcion}</div>
      </>
    )
  }
  export default ItemDetailed