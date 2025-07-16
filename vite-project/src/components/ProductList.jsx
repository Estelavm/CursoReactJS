import { useState, useEffect } from "react";
import { useCarrito } from "../context/CarritoContext";
import {
  Titulo,
  TarjetaProducto,
  Precio,
  BotonAgregar,
  BotonDescripcion,
} from "../styled/ProductListStyles";
import { FaCartPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

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
    descripcion:
      "Hecha con capas de galletitas de chocolate bañadas en café, intercaladas con una suave crema de queso y dulce de leche.",
    mostrarDescripcion: false,
  },
  {
    id: 3,
    nombre: "Torta Merengada",
    imagen: "https://i.imgur.com/R4fctYS.png",
    precio: 2500,
    descripcion:
      "Una torta ligera y aireada con capas de merengue crocante y una suave crema.",
    mostrarDescripcion: false,
  },
  {
    id: 4,
    nombre: "Mousse de Chocolate",
    imagen: "https://i.imgur.com/Msf40E7.png",
    precio: 5000,
    descripcion:
      "Un postre suave y cremoso con un intenso sabor a chocolate, ideal para los fanáticos del chocolate en su forma más ligera.",
    mostrarDescripcion: false,
  },
  {
    id: 5,
    nombre: "Torta Red Velvet",
    imagen: "https://i.imgur.com/gc2p7EP.png",
    precio: 3500,
    descripcion:
      "Un bizcocho esponjoso de color rojo vibrante, cubierto con una suave crema de queso, combinando el sabor sutil del cacao.",
    mostrarDescripcion: false,
  },
  {
    id: 6,
    nombre: "Torta Fraiser",
    imagen: "https://i.imgur.com/asdvuFp.png",
    precio: 5000,
    descripcion:
      "Un bizcocho suave relleno con crema pastelera y fresas frescas, creando una combinación de sabores frescos y dulces.",
    mostrarDescripcion: false,
  },
];

export default function ProductList() {
  const [productos, setProductos] = useState(productosIniciales);
  const { agregarProducto } = useCarrito();

  function toggleDescripcion(id) {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, mostrarDescripcion: !p.mostrarDescripcion }
          : p
      )
    );
  }

  const manejarAgregar = (producto) => {
    agregarProducto(producto);
    toast.success(`${producto.nombre} agregado al carrito 🛒`);
  };

  useEffect(() => {
    console.log("Lista de productos disponibles:");
    productos.forEach((producto, i) => {
      console.log(`${i + 1}. ${producto.nombre}`);
    });
  }, [productos]);

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
      <div className="container">
        <div className="row justify-content-center">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
              <TarjetaProducto>
                <img src={producto.imagen} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <Precio>${producto.precio}</Precio>

                <BotonDescripcion
                  onClick={() => toggleDescripcion(producto.id)}
                  aria-pressed={producto.mostrarDescripcion}
                  aria-label={
                    producto.mostrarDescripcion
                      ? `Ocultar descripción de ${producto.nombre}`
                      : `Ver descripción de ${producto.nombre}`
                  }
                >
                  {producto.mostrarDescripcion ? (
                    <>
                      <FaEyeSlash aria-hidden="true" /> Ocultar
                    </>
                  ) : (
                    <>
                      <FaEye aria-hidden="true" /> Ver descripción
                    </>
                  )}
                </BotonDescripcion>

                {producto.mostrarDescripcion && <p>{producto.descripcion}</p>}

                <BotonAgregar
                  onClick={() => manejarAgregar(producto)}
                  aria-label={`Agregar ${producto.nombre} al carrito`}
                >
                  <FaCartPlus aria-hidden="true" /> Agregar al carrito
                </BotonAgregar>
              </TarjetaProducto>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
