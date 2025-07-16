import React from "react";
import video from '../assets/Images/video.mp4';
import {
  PresentationSection,
  PresentationText,
  VideoContainer,
  Video
} from "../styled/PresentationStyles"; 
import { Helmet } from "react-helmet-async";

export default function Presentacion() {
  return (
    <PresentationSection id="presentacion" className="container">
      <Helmet>
        <title>Inicio | Delicias del Alma</title>
        <meta name="description" content="Conocé Delicias del Alma, una pastelería online donde cada bocado es un momento especial. Mirá nuestro video de presentación." />
      </Helmet>

      <div className="row align-items-center">
        <div className="col-md-12">
          <PresentationText>
            Bienvenido a Delicias del Alma, tu pastelería en línea donde cada bocado es un momento especial. Explora nuestros deliciosos productos y descubre la pasión por la repostería que nos impulsa a crear sabores inolvidables.
          </PresentationText>
          <VideoContainer>
            <Video
              src={video}
              controls
              aria-label="Video de presentación de Delicias del Alma"
              title="Presentación de Delicias del Alma"
            />
          </VideoContainer>
        </div>
      </div>
    </PresentationSection>
  );
}