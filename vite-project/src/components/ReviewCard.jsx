import React from "react";
import cliente1 from '../assets/Images/cliente1.jpg';
import cliente2 from '../assets/Images/cliente2.jpg';
import cliente3 from '../assets/Images/cliente3.jpg';

export default function Opiniones() {
  return (
    <>
      <h2 className="titulo-reseñas">Opiniones de Nuestros Clientes</h2>
      <p className="parrafo-reseñas">
        Nos enorgullece contar con la satisfacción de nuestros clientes. A continuación, compartimos algunas de las opiniones de quienes ya han disfrutado de nuestras delicias.
      </p>
      <section className="opiniones" id="opiniones">
        <div className="card">
          <img src={cliente1} alt="Foto de Ana Pérez" />
          <h3>Ana Pérez</h3>
          <p>Las tortas son espectaculares, frescas y de un sabor único. La atención también fue de primera, realmente recomendable!</p>
        </div>
        <div className="card">
          <img src={cliente2} alt="Foto de Carlos López" />
          <h3>Carlos López</h3>
          <p>La chocotorta fue un éxito en mi fiesta. Muy contento con la calidad de los productos, todo llegó a tiempo y en perfectas condiciones.</p>
        </div>
        <div className="card">
          <img src={cliente3} alt="Foto de Mariana Gómez" />
          <h3>Mariana Gómez</h3>
          <p>Pedí la torta de chocolate blanco y fue un verdadero manjar. La presentación es impecable y el sabor, inigualable. ¡Gracias Delicias del Alma!</p>
        </div>
      </section>
    </>
  );
}
