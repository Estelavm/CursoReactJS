import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import imgChocolateBlanco from '../assets/Images/Chocolate-Blanco.png'
import imgChocotorta from '../assets/Images/Chocotorta.png'
import imgMerengada from '../assets/Images/Merengada.png'
import imgMousse from '../assets/Images/Mousse.png'
import imgRedVelvet from '../assets/Images/Red-Velvet.png'
import imgTortaFraiser from '../assets/Images/Torta-Fraiser.png'

const productosIniciales = [
  {
    id: 1,
    nombre: "Torta de Chocolate Blanco",
    imagen: imgChocolateBlanco,  
    precio: 4500,
    descripcion:
      "Un delicioso bizcocho suave y esponjoso, relleno y cubierto con una rica capa de chocolate blanco.",
    mostrarDescripcion: false,
  },
  {
    id: 2,
    nombre: "Chocotorta",
    imagen: imgChocotorta,
    precio: 3500,
    descripcion: "Hecha con capas de galletitas de chocolate bañadas en café, intercaladas con una suave crema de queso y dulce de leche.",
    mostrarDescripcion: false,
  },
  {
    id: 3,
    nombre: "Torta Merengada",
    imagen: imgMerengada,
    precio: 2500,
    descripcion: "Una torta ligera y aireada con capas de merengue crocante y una suave crema.",
    mostrarDescripcion: false,
  },
  {
    id: 4,
        nombre: "Mousse de Chocolate",
        imagen: imgMousse,
        precio: 5000,
        descripcion: "Un postre suave y cremoso con un intenso sabor a chocolate, ideal para los fanáticos del chocolate en su forma más ligera.",
    mostrarDescripcion: false,
  },
  {
    id: 5,
        nombre: "Torta Red Velvet",
        imagen: imgRedVelvet,
        precio: 3500,
        descripcion: "Un bizcocho esponjoso de color rojo vibrante, cubierto con una suave crema de queso, combinando el sabor sutil del cacao.",
    mostrarDescripcion: false,
  },
  {
    id: 6,
        nombre: "Torta Fraiser",
        imagen: imgTortaFraiser,
        precio: 5000,
        descripcion: "Un bizcocho suave relleno con crema pastelera y fresas frescas, creando una combinación de sabores frescos y dulces.",
    mostrarDescripcion: false,
  },
];

export default function ProductList() {
  const [productos, setProductos] = useState(productosIniciales);

  // Mostrar/ocultar descripción
  function toggleDescripcion(id) {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, mostrarDescripcion: !p.mostrarDescripcion } : p
      )
    );
  }

  // Agregar producto al carrito en localStorage
  function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoExistente = carrito.find((item) => item.nombre === producto.nombre);

    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
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
          agregarAlCarrito={agregarAlCarrito}
          toggleDescripcion={toggleDescripcion}
        />
      ))}
    </div>
  </>
);
}
