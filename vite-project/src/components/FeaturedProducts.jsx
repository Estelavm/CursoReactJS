import { useState, useEffect } from "react";

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
        }));
        setProductos(primeros6);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const yaExiste = carrito.find((p) => p.nombre === producto.nombre);
    if (yaExiste) {
      yaExiste.cantidad++;
    } else {
      carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos.</p>;

  return (
  <section >
    <h2>Productos Selectos</h2>
    <div className="productos productos_selectos">
      {productos.map((p) => (
        <div key={p.id} className="producto">
          <img src={p.imagen} alt={p.nombre} />
          <h2>{p.nombre}</h2>
          <p className="precio">${p.precio}</p>
          <button className="btn-agregar btn-descripcion" onClick={() => agregarAlCarrito(p)}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  </section>
);

}
