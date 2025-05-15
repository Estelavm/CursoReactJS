import React from "react";

export default function Contacto() {
  return (
    <>
      <h2 className="titulo-form">Contáctanos</h2>
      <p>
        Si tienes preguntas, sugerencias o deseas realizar un pedido, no dudes en enviarnos un mensaje. Estamos aquí para ayudarte y hacer que tu experiencia con nuestras delicias sea inolvidable.
      </p>
      <section className="Form" id="form">
        <form action="https://formspree.io/f/meojblol" method="POST">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Escriba su nombre aquí" />
          
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Escriba su email aquí" />
          
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" placeholder="Escriba su mensaje aquí" rows="4" cols="50"></textarea>
          
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}
