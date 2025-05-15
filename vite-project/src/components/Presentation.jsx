import React from "react";
import video from '../assets/Images/video.mp4';

export default function Presentacion() {
  return (
    <section className="presentacion" id="presentacion">
      <p className="presentacion-texto">
        Bienvenido a Delicias del Alma, tu pastelería en línea donde cada bocado es un momento especial. Explora nuestros deliciosos productos y descubre la pasión por la repostería que nos impulsa a crear sabores inolvidables.
      </p>
      <div className="video-container">
        <video src={video} controls className="video"></video>
      </div>
    </section>
  );
}
