/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";

const CarritoContext = createContext();

function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarProducto = (producto) => {
    if (!producto || !producto.nombre) return;

    const existe = carrito.find(p => p.nombre === producto.nombre);

    if (existe) {
      setCarrito(carrito.map(p =>
        p.nombre === producto.nombre ? { ...p, cantidad: p.cantidad + 1 } : p
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarProducto = (nombre) => {
    if (!nombre) return;
    setCarrito(carrito.filter(p => p.nombre !== nombre));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const actualizarProductoCantidad = (nombre, cantidad) => {
    if (cantidad < 1) return;

    setCarrito(carrito.map(p =>
      p.nombre === nombre ? { ...p, cantidad } : p
    ));
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito, actualizarProductoCantidad }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

function useCarrito() {
  return useContext(CarritoContext);
}

export { CarritoProvider, useCarrito };
