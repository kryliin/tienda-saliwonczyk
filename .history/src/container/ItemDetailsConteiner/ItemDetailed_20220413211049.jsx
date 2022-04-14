
function ItemDetailed({ productos }) {
  return (
    <>
      <img src={productos.foto} alt='' className="w-25"/>
      <div>{productos.nombre}</div>
      <div>{productos.categoria}</div>
      <div>{productos.precio}</div>
      <div>{productos.descripcion}</div>
      <div>{productos.observaciones}</div>
    </>
  )
}
export default ItemDetailed