import { useState, useEffect } from "react";
import { useCarrito } from "../context/CarritoContext";
import {
  Section,
  Title,
  ProductosGrid,
  ProductoCard,
  Precio,
  BotonAgregar,
} from "../styled/FeaturedProductsStyles";
import { FaCartPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

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
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { agregarProducto } = useCarrito();

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
        setProductos(primeros6);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const toggleDescripcion = (id) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, mostrarDescripcion: !p.mostrarDescripcion } : p
      )
    );
  };

  const manejarAgregar = (producto) => {
    if (!producto || !producto.nombre) {
      console.warn("Producto inválido:", producto);
      toast.error("Producto inválido.");
      return;
    }
    agregarProducto(producto);
    toast.success(`${producto.nombre} agregado al carrito`);
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
      <ProductosGrid>
        {productos.map((p) => (
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

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Section>
  );
}