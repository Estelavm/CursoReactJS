import FooterContainer from "../styled/FooterStyles";
import { FaCopyright } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function Footer() {
  return (
    <>
      <Helmet>
        <title>Delicias del Alma | Pastelería Artesanal Online</title>
        <meta
          name="description"
          content="Sitio oficial de Delicias del Alma. Conocé nuestras tortas artesanales, opiniones de clientes y realizá tu pedido online con confianza."
        />
      </Helmet>

      <FooterContainer as="footer" role="contentinfo" aria-label="Pie de página">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto text-center">
              <p aria-label="Todos los derechos reservados 2025">
                <FaCopyright aria-hidden="true" /> 2025. Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </FooterContainer>
    </>
  );
}