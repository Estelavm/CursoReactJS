import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useCarrito } from "../context/CarritoContext";

const productosIniciales = [
  {
    id: 1,
    nombre: "Torta de Chocolate Blanco",
    imagen: "https://i.imgur.com/0klIN4g.png",  
    precio: 4500,
    descripcion:
      "Un delicioso bizcocho suave y esponjoso, relleno y cubierto con una rica capa de chocolate blanco.",
    mostrarDescripcion: false,
  },
  {
    id: 2,
    nombre: "Chocotorta",
    imagen: "https://i.imgur.com/YRvJ7HE.png",
    precio: 3500,
    descripcion: "Hecha con capas de galletitas de chocolate bañadas en café, intercaladas con una suave crema de queso y dulce de leche.",
    mostrarDescripcion: false,
  },
  {
    id: 3,
    nombre: "Torta Merengada",
    imagen: "https://i.imgur.com/R4fctYS.png",
    precio: 2500,
    descripcion: "Una torta ligera y aireada con capas de merengue crocante y una suave crema.",
    mostrarDescripcion: false,
  },
  {
    id: 4,
        nombre: "Mousse de Chocolate",
        imagen: "https://i.imgur.com/Msf40E7.png",
        precio: 5000,
        descripcion: "Un postre suave y cremoso con un intenso sabor a chocolate, ideal para los fanáticos del chocolate en su forma más ligera.",
    mostrarDescripcion: false,
  },
  {
    id: 5,
        nombre: "Torta Red Velvet",
        imagen: "https://i.imgur.com/gc2p7EP.png",
        precio: 3500,
        descripcion: "Un bizcocho esponjoso de color rojo vibrante, cubierto con una suave crema de queso, combinando el sabor sutil del cacao.",
    mostrarDescripcion: false,
  },
  {
    id: 6,
        nombre: "Torta Fraiser",
        imagen: "https://i.imgur.com/asdvuFp.png",
        precio: 5000,
        descripcion: "Un bizcocho suave relleno con crema pastelera y fresas frescas, creando una combinación de sabores frescos y dulces.",
    mostrarDescripcion: false,
  },
];

export default function ProductList() {
  const [productos, setProductos] = useState(productosIniciales);
  const { agregarProducto } = useCarrito();

  // Mostrar/ocultar descripción
  function toggleDescripcion(id) {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, mostrarDescripcion: !p.mostrarDescripcion } : p
      )
    );
  }

  useEffect(() => {
    console.log("Lista de productos disponibles:");
    productos.forEach((producto, i) => {
      console.log(`${i + 1}. ${producto.nombre}`);
    });
  }, [productos]);

  return (
  <>
    <h2>Nuestros productos</h2>
    <div className="productos">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          agregarAlCarrito={agregarProducto}
          toggleDescripcion={toggleDescripcion}
        />
      ))}
    </div>
  </>
);
}
