
function ItemDetailed({ productos }) {
  return (
    <>
      <img src={productos.foto} alt='' className="w-25"/>
      <div>{productos.name}</div>
      <div>{productos.categoria}</div>
      <div>{productos.price}</div>
      <div>{productos.descripcion}</div>
    </>
  )
}
export default ItemDetailed