import { useState, useEffect } from "react";

export default function Cart() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  function actualizarCantidad(index, cantidad) {
    if (cantidad < 1) return;
    const copia = [...carrito];
    copia[index].cantidad = cantidad;
    setCarrito(copia);
    localStorage.setItem("carrito", JSON.stringify(copia));
  }

  function eliminarProducto(index) {
    const copia = [...carrito];
    copia.splice(index, 1);
    setCarrito(copia);
    localStorage.setItem("carrito", JSON.stringify(copia));
  }

  function vaciarCarrito() {
    setCarrito([]);
    localStorage.removeItem("carrito");
  }

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <main>
      <h2>Carrito de Compras</h2>
      <div id="carrito-contenedor">
        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            {carrito.map((producto, index) => (
              <div className="producto-carrito producto" key={index}>
                <img src={producto.imagen} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <div className="precio">
                  ${producto.precio * producto.cantidad}
                </div>
                <p>
                  Cantidad:{" "}
                  <input
                    type="number"
                    className="cantidad"
                    value={producto.cantidad}
                    min="1"
                    onChange={(e) =>
                      actualizarCantidad(index, parseInt(e.target.value))
                    }
                  />
                </p>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarProducto(index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
            <div className="total">Total: ${total.toFixed(2)}</div>
            <button id="vaciar-carrito" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
            <button
              className="btn-descripcion"
              onClick={() => alert("Pedido realizado")}
            >
              Realizar Pedido
            </button>
            <a href="/" className="btn-descripcion">
              Volver a la tienda
            </a>
          </>
        )}
      </div>
    </main>
  );
}
