export default function ProductCard({ producto, agregarAlCarrito, toggleDescripcion }) {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p className="precio">${producto.precio}</p>

      <button onClick={() => { 
                              console.log("click", producto.id);
                              toggleDescripcion(producto.id);
                              }
                      } className="btn-descripcion">
        {producto.mostrarDescripcion ? "Ocultar descripción" : "Ver descripción"}
      </button>


      {producto.mostrarDescripcion && (
        <div className="descripcion-ampliada">{producto.descripcion}</div>
      )}

      <button
        className="btn-descripcion btn-agregar"
        onClick={() => agregarAlCarrito(producto)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
