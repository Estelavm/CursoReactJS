import { useEffect } from "react";

const productosIniciales = [
  {
    nombre: "Torta de Chocolate Blanco",
    imagen: "https://i.imgur.com/0klIN4g.png",  
    precio: 4500,
    descripcion:
      "Un delicioso bizcocho suave y esponjoso, relleno y cubierto con una rica capa de chocolate blanco.",
  },
  {
    nombre: "Chocotorta",
    imagen: "https://i.imgur.com/YRvJ7HE.png",
    precio: 3500,
    descripcion: "Hecha con capas de galletitas de chocolate bañadas en café, intercaladas con una suave crema de queso y dulce de leche.",
  },
  {
    nombre: "Torta Merengada",
    imagen: "https://i.imgur.com/R4fctYS.png",
    precio: 2500,
    descripcion: "Una torta ligera y aireada con capas de merengue crocante y una suave crema.",
  },
  {
    nombre: "Mousse de Chocolate",
    imagen: "https://i.imgur.com/Msf40E7.png",
    precio: 5000,
    descripcion: "Un postre suave y cremoso con un intenso sabor a chocolate, ideal para los fanáticos del chocolate en su forma más ligera.",
  },
  {
    nombre: "Torta Red Velvet",
    imagen: "https://i.imgur.com/gc2p7EP.png",
    precio: 3500,
    descripcion: "Un bizcocho esponjoso de color rojo vibrante, cubierto con una suave crema de queso, combinando el sabor sutil del cacao.",
  },
  {
    nombre: "Torta Fraiser",
    imagen: "https://i.imgur.com/asdvuFp.png",
    precio: 5000,
    descripcion: "Un bizcocho suave relleno con crema pastelera y fresas frescas, creando una combinación de sabores frescos y dulces.",
  },
];

export default function CargarProductosMockAPI() {
  useEffect(() => {
    async function cargar() {
      for (const producto of productosIniciales) {
        try {
          const res = await fetch("https://6873a89fc75558e27354d9e0.mockapi.io/api/productos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto),
          });
          if (!res.ok) {
            console.error("Error al cargar producto:", producto.nombre);
          } else {
            console.log("Producto cargado:", producto.nombre);
          }
        } catch (error) {
          console.error("Error de red:", error);
        }
      }
    }
    cargar();
  }, []);

  return <p>Cargando productos en MockAPI...</p>;
}
