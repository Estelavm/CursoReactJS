import { Card } from "../styled/ProductCardStyles";
import { FaCartPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function ProductCard({ producto, agregarAlCarrito, toggleDescripcion }) {
  const manejarAgregar = () => {
    agregarAlCarrito(producto);
    toast.success(`${producto.nombre} agregado al carrito 🛒`);
  };

  return (
    <Card>
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p className="precio">${producto.precio}</p>

      <button
        onClick={() => toggleDescripcion(producto.id)}
        className="btn-descripcion"
        aria-pressed={producto.mostrarDescripcion}
        aria-label={
          producto.mostrarDescripcion
            ? `Ocultar descripción de ${producto.nombre}`
            : `Ver descripción de ${producto.nombre}`
        }
      >
        {producto.mostrarDescripcion ? (
          <>
            <FaEyeSlash aria-hidden="true" /> Ocultar descripción
          </>
        ) : (
          <>
            <FaEye aria-hidden="true" /> Ver descripción
          </>
        )}
      </button>

      {producto.mostrarDescripcion && (
        <div className="descripcion-ampliada">{producto.descripcion}</div>
      )}

      <button
        className="btn-descripcion btn-agregar"
        onClick={manejarAgregar}
        aria-label={`Agregar ${producto.nombre} al carrito`}
      >
        <FaCartPlus aria-hidden="true" /> Agregar al carrito
      </button>
    </Card>
  );
}
