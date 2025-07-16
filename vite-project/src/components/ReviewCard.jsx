import { Helmet } from "react-helmet-async";
import { FaQuoteLeft } from "react-icons/fa";
import cliente1 from '../assets/Images/cliente1.jpg';
import cliente2 from '../assets/Images/cliente2.jpg';
import cliente3 from '../assets/Images/cliente3.jpg';
import {
  TituloResenas,
  ParrafoResenas,
  OpinionesSection,
  Card
} from "../styled/ReviewCardStyles";

export default function Opiniones() {
  return (
    <>
      <Helmet>
        <title>Opiniones de Clientes | Delicias del Alma</title>
        <meta
          name="description"
          content="Descubrí las opiniones de nuestros clientes sobre las tortas y postres de Delicias del Alma. ¡Sabor que emociona!"
        />
      </Helmet>

      <TituloResenas>Opiniones de Nuestros Clientes</TituloResenas>

      <ParrafoResenas>
        Nos enorgullece contar con la satisfacción de nuestros clientes. A continuación, compartimos algunas de las opiniones de quienes ya han disfrutado de nuestras delicias.
      </ParrafoResenas>

      <OpinionesSection className="container" aria-label="Sección de opiniones de clientes">
        <div className="row justify-content-center">
          {[cliente1, cliente2, cliente3].map((img, i) => {
            const nombres = ["Ana Pérez", "Carlos López", "Mariana Gómez"];
            const textos = [
              "Las tortas son espectaculares, frescas y de un sabor único. La atención también fue de primera, realmente recomendable!",
              "La chocotorta fue un éxito en mi fiesta. Muy contento con la calidad de los productos, todo llegó a tiempo y en perfectas condiciones.",
              "Pedí la torta de chocolate blanco y fue un verdadero manjar. La presentación es impecable y el sabor, inigualable. ¡Gracias Delicias del Alma!"
            ];
            return (
              <div
                key={i}
                className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center mb-4"
              >
                <Card role="article" aria-label={`Opinión de ${nombres[i]}`}>
                  <img src={img} alt={`Foto de ${nombres[i]}`} />
                  <h3>
                    <FaQuoteLeft style={{ marginRight: 8, color: "#a355c0" }} />
                    {nombres[i]}
                  </h3>
                  <p>{textos[i]}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </OpinionesSection>
    </>
  );
}
