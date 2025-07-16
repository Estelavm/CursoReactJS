import { useProductos } from "../context/ProductosContext";
import { useState } from "react";
import {
  Section,
  Title,
  Subtitle,
  FormStyled,
  ProductsList,
  ProductCard,
  Input,
  Textarea,
  Button,
  Image
} from "../styled/AdminProductosStyles";
import { toast } from "react-toastify";
import { FaEdit, FaTrashAlt, FaPlus, FaSave, FaTimes } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

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
      toast.error("Verificá los campos");
      return;
    }

    editarProducto(modoEdicion, datos);
    toast.success("Producto editado con éxito");
    cancelarEdicion();
  }

  function confirmarEliminacion(id) {
    if (confirm("¿Estás seguro de que querés eliminar este producto?")) {
      eliminarProducto(id);
      toast.success("Producto eliminado");
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
      toast.error("Verificá los campos");
      return;
    }
    agregarProducto(nuevo);
    toast.success("Producto agregado con éxito");
    setNuevo({
      nombre: "",
      precio: "",
      descripcion: "",
      imagen: ""
    });
  }

  return (
    <Section className="container" aria-labelledby="titulo-admin-productos">
      <Helmet>
        <title>Administrar Productos | Delicias del Alma</title>
        <meta
          name="description"
          content="Panel de administración para agregar, editar y eliminar productos en Delicias del Alma."
        />
      </Helmet>

      <Title id="titulo-admin-productos">Administrar Productos</Title>

      <Subtitle>Agregar nuevo producto</Subtitle>
      <FormStyled
        onSubmit={agregarNuevo}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
        aria-label="Formulario para agregar nuevo producto"
      >
        <Input
          name="nombre"
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={manejarCambio}
          className="form-control mb-3"
          aria-label="Nombre del nuevo producto"
          required
        />
        <Input
          name="precio"
          type="number"
          placeholder="Precio"
          value={nuevo.precio}
          onChange={manejarCambio}
          className="form-control mb-3"
          aria-label="Precio del nuevo producto"
          required
        />
        <Textarea
          name="descripcion"
          placeholder="Descripción"
          value={nuevo.descripcion}
          onChange={manejarCambio}
          className="form-control mb-3"
          aria-label="Descripción del nuevo producto"
          required
        />
        <Input
          name="imagen"
          placeholder="URL de imagen"
          value={nuevo.imagen}
          onChange={manejarCambio}
          className="form-control mb-3"
          aria-label="URL de imagen del nuevo producto"
          required
        />
        <Button type="submit" className="btn btn-primary" aria-label="Agregar nuevo producto">
          <FaPlus className="me-2" />
          Agregar
        </Button>
      </FormStyled>

      <Subtitle>Listado</Subtitle>
      <div className="row d-flex align-items-stretch">
        {productos.map((producto) =>
          modoEdicion === producto.id ? (
            <div key={producto.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <FormStyled onSubmit={guardarCambios} aria-label={`Editar ${producto.nombre}`}>
                <Input
                  name="nombre"
                  value={datos.nombre}
                  onChange={manejarCambio}
                  className="form-control mb-3"
                  required
                  aria-label="Nombre del producto"
                />
                <Input
                  name="precio"
                  type="number"
                  value={datos.precio}
                  onChange={manejarCambio}
                  className="form-control mb-3"
                  required
                  aria-label="Precio del producto"
                />
                <Textarea
                  name="descripcion"
                  value={datos.descripcion}
                  onChange={manejarCambio}
                  className="form-control mb-3"
                  required
                  aria-label="Descripción del producto"
                />
                <Input
                  name="imagen"
                  value={datos.imagen}
                  onChange={manejarCambio}
                  placeholder="URL de imagen"
                  className="form-control mb-3"
                  required
                  aria-label="URL de imagen del producto"
                />
                <Button type="submit" className="btn btn-success me-2" aria-label="Guardar cambios">
                  <FaSave className="me-2" />
                  Guardar
                </Button>
                <Button
                  type="button"
                  onClick={cancelarEdicion}
                  className="btn btn-secondary"
                  aria-label="Cancelar edición"
                >
                  <FaTimes className="me-2" />
                  Cancelar
                </Button>
              </FormStyled>
            </div>
          ) : (
            <div key={producto.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <ProductCard aria-label={`Producto: ${producto.nombre}`}>
                <h3>{producto.nombre}</h3>
                <p className="precio">${producto.precio}</p>
                <p>{producto.descripcion}</p>
                {producto.imagen && (
                  <Image src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
                )}
                <Button
                  onClick={() => iniciarEdicion(producto)}
                  className="btn btn-warning me-2"
                  aria-label={`Editar ${producto.nombre}`}
                >
                  <FaEdit className="me-2" />
                  Editar
                </Button>
                <Button
                  onClick={() => confirmarEliminacion(producto.id)}
                  className="btn btn-danger"
                  aria-label={`Eliminar ${producto.nombre}`}
                >
                  <FaTrashAlt className="me-2" />
                  Eliminar
                </Button>
              </ProductCard>
            </div>
          )
        )}
      </div>
    </Section>
  );
}