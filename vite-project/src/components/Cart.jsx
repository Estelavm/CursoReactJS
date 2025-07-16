import { useCarrito } from "../context/CarritoContext";
import {
  Main,
  CarritoContenedor,
  ProductoCarrito,
  ImagenProducto,
  Nombre,
  Descripcion,
  Precio,
  CantidadInput,
  Total,
  BotonContenedor,
  Boton,
  LinkStyled
} from "../styled/CartStyles";

import { FaTrash, FaShoppingCart, FaUndo } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

export default function Cart() {
  const { carrito, eliminarProducto, vaciarCarrito, actualizarProductoCantidad } = useCarrito();

  function actualizarCantidad(index, cantidad) {
    if (cantidad < 1) return;

    const producto = carrito[index];
    if (!producto) return;

    actualizarProductoCantidad(producto.nombre, cantidad);
    toast.info(`Cantidad de ${producto.nombre} actualizada a ${cantidad}`);
  }

  function manejarEliminar(nombre) {
    eliminarProducto(nombre);
    toast.success(`Producto "${nombre}" eliminado`);
  }

  function manejarVaciar() {
    vaciarCarrito();
    toast.success("Carrito vaciado");
  }

  function manejarPedido() {
    if (carrito.length === 0) {
      toast.error("El carrito está vacío, no se puede realizar el pedido");
      return;
    }
    toast.success("Pedido realizado con éxito");
  }

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

   return (
    <Main aria-labelledby="titulo-carrito">
      <Helmet>
        <title>Carrito de Compras | Delicias del Alma</title>
        <meta
          name="description"
          content="Revisá los productos que seleccionaste, ajustá las cantidades y finalizá tu compra en Delicias del Alma."
        />
      </Helmet>

      <h2 id="titulo-carrito">
        <FaShoppingCart aria-hidden="true" /> Carrito de Compras
      </h2>

      <CarritoContenedor>
        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <div className="row justify-content-center">
            {carrito.map((producto, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <ProductoCarrito>
                  <ImagenProducto
                    src={producto.imagen}
                    alt={`Imagen de ${producto.nombre}`}
                  />
                  <Nombre>{producto.nombre}</Nombre>
                  <Descripcion>{producto.descripcion}</Descripcion>
                  <Precio>
                    ${ (producto.precio * producto.cantidad).toFixed(2) }
                  </Precio>
                  <label htmlFor={`cantidad-${index}`}>Cantidad:</label>{" "}
                  <CantidadInput
                    id={`cantidad-${index}`}
                    type="number"
                    value={producto.cantidad}
                    min="1"
                    onChange={(e) =>
                      actualizarCantidad(index, parseInt(e.target.value))
                    }
                    aria-label={`Cambiar cantidad de ${producto.nombre}`}
                  />
                  <Boton
                    onClick={() => manejarEliminar(producto.nombre)}
                    aria-label={`Eliminar ${producto.nombre} del carrito`}
                  >
                    <FaTrash aria-hidden="true" style={{ marginRight: "5px" }} />
                    Eliminar
                  </Boton>
                </ProductoCarrito>
              </div>
            ))}

            <Total role="status" aria-live="polite">
              Total: ${total.toFixed(2)}
            </Total>

            <BotonContenedor>
              <Boton onClick={manejarVaciar} aria-label="Vaciar carrito">
                Vaciar carrito
              </Boton>
              <Boton
                variant="llamativo"
                onClick={manejarPedido}
                aria-label="Realizar pedido"
              >
                Realizar Pedido
              </Boton>
              <LinkStyled href="/" aria-label="Volver a la tienda">
                <FaUndo aria-hidden="true" style={{ marginRight: "5px" }} />
                Volver a la tienda
              </LinkStyled>
            </BotonContenedor>
          </div>
        )}
      </CarritoContenedor>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Main>
  );
}