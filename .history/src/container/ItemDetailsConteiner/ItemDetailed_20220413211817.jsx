
function ItemDetailed({ producto }) {
  return (
    <>
      <img src={producto.foto} alt='' className="w-25"/>
      <div>{producto.nombre}</div>
      <div>{producto.categoria}</div>
      <div>{producto.precio}</div>
      <div>{producto.descripcion}</div>
      <div>{producto.observaciones}</div>
    </>
  )
}
export default ItemDetailed