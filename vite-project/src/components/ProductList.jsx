import { useState, useEffect } from "react"; 
import { useCarrito } from "../context/CarritoContext";
import { useProductos } from "../context/ProductosContext";
import {
  Titulo,
  ContenedorProductos,
  TarjetaProducto,
  Precio,
  BotonAgregar,
  BotonDescripcion,
} from "../styled/ProductListStyles";
import { FaCartPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import styled from "@emotion/styled";

const Buscador = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px 15px;
  margin: 0 auto 2rem auto;
  display: block;
  font-family: var(--font-family-main);
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid #a355c0;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6c63ff;
  }
`;

const Paginacion = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const BotonPagina = styled.button`
  background-color: var(--background-color-header);
  color: var(--color-text);
  border: 2px solid #a355c0;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-family: var(--font-family-main);
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #a355c0;
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const InfoPagina = styled.span`
  font-family: var(--font-family-main);
  font-weight: bold;
  color: var(--color-text);
  align-self: center;
`;

export default function ProductList() {
  const { productos } = useProductos();
  const { agregarProducto } = useCarrito();

  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 3;

  const productosConDescripcion = productos
    ? productos.map((p) => ({ ...p }))
    : [];

  const productosFiltrados = productosConDescripcion.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const indexUltimoProducto = paginaActual * productosPorPagina;
  const indexPrimerProducto = indexUltimoProducto - productosPorPagina;
  const productosVisibles = productosFiltrados.slice(
    indexPrimerProducto,
    indexUltimoProducto
  );

  const cambiarPagina = (num) => {
    if (num < 1) num = 1;
    else if (num > Math.ceil(productosFiltrados.length / productosPorPagina))
      num = Math.ceil(productosFiltrados.length / productosPorPagina);
    setPaginaActual(num);
  };

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda]);

  const [descVisible, setDescVisible] = useState({});

  const toggleDescripcion = (id) => {
    setDescVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const manejarAgregar = (producto) => {
    agregarProducto(producto);
    toast.success(`${producto.nombre} agregado al carrito 🛒`);
  };

  return (
    <>
      <Helmet>
        <title>Lista de Productos - Delicias del Alma</title>
        <meta
          name="description"
          content="Descubre nuestra variedad de tortas y postres artesanales. Productos frescos y deliciosos para cada ocasión."
        />
        <meta name="keywords" content="tortas, postres, repostería, Delicias del Alma" />
        <meta name="author" content="Delicias del Alma" />
      </Helmet>

      <Titulo>Nuestros productos</Titulo>

      <Buscador
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        aria-label="Buscar productos por nombre"
      />

      <ContenedorProductos role="list">
        {productosVisibles.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          productosVisibles.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              role="listitem"
              aria-label={`Producto: ${producto.nombre}`}
            >
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <Precio>${producto.precio}</Precio>

              <BotonDescripcion
                onClick={() => toggleDescripcion(producto.id)}
                aria-pressed={descVisible[producto.id] || false}
                aria-label={
                  descVisible[producto.id]
                    ? `Ocultar descripción de ${producto.nombre}`
                    : `Ver descripción de ${producto.nombre}`
                }
              >
                {descVisible[producto.id] ? (
                  <>
                    <FaEyeSlash aria-hidden="true" /> Ocultar
                  </>
                ) : (
                  <>
                    <FaEye aria-hidden="true" /> Ver descripción
                  </>
                )}
              </BotonDescripcion>

              {descVisible[producto.id] && <p>{producto.descripcion}</p>}

              <BotonAgregar
                onClick={() => manejarAgregar(producto)}
                aria-label={`Agregar ${producto.nombre} al carrito`}
              >
                <FaCartPlus aria-hidden="true" /> Agregar al carrito
              </BotonAgregar>
            </TarjetaProducto>
          ))
        )}
      </ContenedorProductos>

      <Paginacion aria-label="Paginación de productos">
        <BotonPagina
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
          aria-label="Página anterior"
        >
          Anterior
        </BotonPagina>

        <InfoPagina aria-live="polite" aria-atomic="true">
          Página {paginaActual} de {Math.ceil(productosFiltrados.length / productosPorPagina)}
        </InfoPagina>

        <BotonPagina
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === Math.ceil(productosFiltrados.length / productosPorPagina)}
          aria-label="Página siguiente"
        >
          Siguiente
        </BotonPagina>
      </Paginacion>
    </>
  );
}
