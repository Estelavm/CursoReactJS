import { useProductos } from "../context/ProductosContext";
import { useState } from "react";

export default function AdminProductos() {
  const {
    productos,
    editarProducto,
    eliminarProducto,
    agregarProducto,
    cargando,
    error,
  } = useProductos();

  const [modoEdicion, setModoEdicion] = useState(null);
  const [datos, setDatos] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: ""
  });

  const [nuevo, setNuevo] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: ""
  });

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  function manejarCambio(e) {
    const { name, value } = e.target;
    if (modoEdicion) {
      setDatos({ ...datos, [name]: value });
    } else {
      setNuevo({ ...nuevo, [name]: value });
    }
  }

  function iniciarEdicion(producto) {
    setModoEdicion(producto.id);
    setDatos(producto);
  }

  function cancelarEdicion() {
    setModoEdicion(null);
    setDatos({
      nombre: "",
      precio: "",
      descripcion: "",
      imagen: ""
    });
  }

  function guardarCambios(e) {
    e.preventDefault();
    if (
      datos.nombre.trim() === "" ||
      datos.precio <= 0 ||
      datos.descripcion.length < 10 ||
      datos.imagen.trim() === ""
    ) {
      alert("Verificá los campos");
      return;
    }

    editarProducto(modoEdicion, datos);
    cancelarEdicion();
  }

  function confirmarEliminacion(id) {
    if (confirm("¿Estás seguro de que querés eliminar este producto?")) {
      eliminarProducto(id);
    }
  }

  function agregarNuevo(e) {
    e.preventDefault();
    if (
      nuevo.nombre.trim() === "" ||
      nuevo.precio <= 0 ||
      nuevo.descripcion.length < 10 ||
      nuevo.imagen.trim() === ""
    ) {
      alert("Verificá los campos");
      return;
    }
    agregarProducto(nuevo);
    setNuevo({
      nombre: "",
      precio: "",
      descripcion: "",
      imagen: ""
    });
  }

  return (
    <section className="Form">
        <h2 className="admin-title">Administrar Productos</h2>

        <h3>Agregar nuevo producto</h3>
            <form onSubmit={agregarNuevo}>
                <input
                    className="input"
                    name="nombre"
                    placeholder="Nombre"
                    value={nuevo.nombre}
                    onChange={manejarCambio}
                />
                <input
                    className="input"
                    name="precio"
                    type="number"
                    placeholder="Precio"
                    value={nuevo.precio}
                    onChange={manejarCambio}
                />
                <textarea
                    className="textarea"
                    name="descripcion"
                    placeholder="Descripción"
                    value={nuevo.descripcion}
                    onChange={manejarCambio}
                />
                <input
                    className="input"
                    name="imagen"
                    placeholder="URL de imagen"
                    value={nuevo.imagen}
                    onChange={manejarCambio}
                />
                <button type="submit">Agregar</button>
            </form>

        <h3 className="admin-h3">Listado</h3>
            <div className="productos">
                {productos.map((producto) =>
                    modoEdicion === producto.id ? (
                        <form key={producto.id} onSubmit={guardarCambios} className="Form">
                            <input
                                className="input"
                                name="nombre"
                                value={datos.nombre}
                                onChange={manejarCambio}
                            />
                            <input
                                className="input"
                                name="precio"
                                type="number"
                                value={datos.precio}
                                onChange={manejarCambio}
                            />
                            <textarea
                                className="textarea"
                                name="descripcion"
                                value={datos.descripcion}
                                onChange={manejarCambio}
                            />
                            <input
                                className="input"
                                name="imagen"
                                value={datos.imagen}
                                onChange={manejarCambio}
                                placeholder="URL de imagen"
                            />
                            <button type="submit">Guardar</button>
                            <button type="button" onClick={cancelarEdicion}>Cancelar</button>
                        </form>
                    ) : (
                            <div key={producto.id} className="producto">
                                <h3>{producto.nombre}</h3>
                                <p className="precio">${producto.precio}</p>
                                <p>{producto.descripcion}</p>
                                {producto.imagen && (
                                    <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        style={{ maxWidth: "200px", marginBottom: "1rem" }}
                                    />
                                )}
                                <button onClick={() => iniciarEdicion(producto)}>Editar</button>
                                <button onClick={() => confirmarEliminacion(producto.id)}>Eliminar</button>
                            </div>
                        )
                )}
            </div>
    </section>

  );
}
