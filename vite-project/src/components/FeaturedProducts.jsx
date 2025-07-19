import { useState, useEffect } from "react";
import { useCarrito } from "../context/CarritoContext";
import {
  Section,
  Title,
  ProductosGrid,
  ProductoCard,
  Precio,
} from "../styled/FeaturedProductsStyles";
import { FaCartPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const traducciones = {
  "Apam balik": "Pancake de frijoles",
  "Apple & Blackberry Crumble": "Crumble de manzana y mora",
  "Apple Frangipan Tart": "Tarta de manzana y frangipane",
  "Bakewell tart": "Tarta Bakewell",
  "Banana Pancakes": "Panqueques de Banana",
  "Battenberg Cake": "Pastel Battenberg",
};

function traducir(nombre) {
  return traducciones[nombre] || nombre;
}

export default function ProductosSelectos() {
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 3;

  const { agregarProducto } = useCarrito();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then((res) => res.json())
      .then((data) => {
        const primeros6 = data.meals.slice(0, 6).map((p, i) => ({
          id: `selecto-${i + 1}`,
          nombre: traducir(p.strMeal),
          imagen: p.strMealThumb,
          descripcion: "¡Delicioso postre para disfrutar!",
          precio: 1500,
          cantidad: 1,
          mostrarDescripcion: false,
        }));
        setProductosOriginales(primeros6);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const toggleDescripcion = (id) => {
    setProductosOriginales((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, mostrarDescripcion: !p.mostrarDescripcion } : p
      )
    );
  };

  const manejarAgregar = (producto) => {
    agregarProducto(producto);
    toast.success(`${producto.nombre} agregado al carrito`);
  };

  const productosFiltrados = productosOriginales.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const indexUltimo = paginaActual * productosPorPagina;
  const indexPrimero = indexUltimo - productosPorPagina;
  const productosVisibles = productosFiltrados.slice(indexPrimero, indexUltimo);

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda]);

  const cambiarPagina = (num) => {
    const total = Math.ceil(productosFiltrados.length / productosPorPagina);
    if (num < 1) num = 1;
    if (num > total) num = total;
    setPaginaActual(num);
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos.</p>;

  return (
    <Section aria-labelledby="titulo-productos-selectos">
      <Helmet>
        <title>Productos Selectos | Delicias del Alma</title>
        <meta
          name="description"
          content="Descubrí nuestros postres selectos artesanales importados, con sabores únicos y presentación impecable."
        />
      </Helmet>

      <Title id="titulo-productos-selectos">Productos Selectos</Title>

      <Buscador
        type="text"
        placeholder="Buscar postre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        aria-label="Buscar productos por nombre"
      />

      <ProductosGrid>
        {productosVisibles.map((p) => (
          <ProductoCard key={p.id}>
            <img src={p.imagen} alt={`Imagen de ${p.nombre}`} />
            <h2>{p.nombre}</h2>
            <Precio>${p.precio}</Precio>

            <button
              onClick={() => toggleDescripcion(p.id)}
              className="btn-descripcion"
              aria-expanded={p.mostrarDescripcion}
              aria-controls={`desc-${p.id}`}
            >
              {p.mostrarDescripcion ? (
                <>
                  <FaEyeSlash aria-hidden="true" style={{ marginRight: 6 }} />
                  Ocultar descripción
                </>
              ) : (
                <>
                  <FaEye aria-hidden="true" style={{ marginRight: 6 }} />
                  Ver descripción
                </>
              )}
            </button>

            {p.mostrarDescripcion && (
              <div id={`desc-${p.id}`} className="descripcion-ampliada">
                {p.descripcion}
              </div>
            )}

            <button
              className="btn-descripcion btn-agregar"
              onClick={() => manejarAgregar(p)}
              aria-label={`Agregar ${p.nombre} al carrito`}
            >
              <FaCartPlus aria-hidden="true" /> Agregar al carrito
            </button>
          </ProductoCard>
        ))}
      </ProductosGrid>

      <Paginacion>
        <BotonPagina
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </BotonPagina>

        <InfoPagina>
          Página {paginaActual} de{" "}
          {Math.ceil(productosFiltrados.length / productosPorPagina)}
        </InfoPagina>

        <BotonPagina
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={
            paginaActual ===
            Math.ceil(productosFiltrados.length / productosPorPagina)
          }
        >
          Siguiente
        </BotonPagina>
      </Paginacion>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Section>
  );
}
