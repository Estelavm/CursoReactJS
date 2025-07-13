/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const ProductosContext = createContext();

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://6873a89fc75558e27354d9e0.mockapi.io/api/productos"; 

  useEffect(() => {
    obtenerProductos();
  }, []);

  async function obtenerProductos() {
    try {
      setCargando(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener los productos.");
      const data = await res.json();
      setProductos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  async function agregarProducto(producto) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });
      const nuevo = await res.json();
      setProductos([...productos, nuevo]);
    } catch (err) {
      setError(err.message || "Error al agregar producto");
    }
  }

  async function editarProducto(id, productoActualizado) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productoActualizado),
      });
      const actualizado = await res.json();
      setProductos(productos.map(p => (p.id === id ? actualizado : p)));
    } catch (err) {
      setError(err.message || "Error al editar producto");
    }
  }

  async function eliminarProducto(id) {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setProductos(productos.filter(p => p.id !== id));
    } catch (err) {
      setError(err.message || "Error al eliminar producto");
    }
  }

  return (
    <ProductosContext.Provider
      value={{
        productos,
        cargando,
        error,
        agregarProducto,
        editarProducto,
        eliminarProducto,
        obtenerProductos,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
}

export function useProductos() {
  return useContext(ProductosContext);
}
