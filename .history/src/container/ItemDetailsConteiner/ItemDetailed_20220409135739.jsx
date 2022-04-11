
function ItemDetailed({ producto }) {
  return (
    <>
      <img src={producto.foto} alt='' className="w-25"/>
      <div>{producto.name}</div>
      <div>{producto.categoria}</div>
      <div>{producto.price}</div>
      <div>{producto.descripcion}</div>
    </>
  )
}
export default ItemDetailed