import {
  ContactWrapper,
  FormContainer,
  StyledForm,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton
} from "../styled/ContactFormStyles";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

export default function Contacto() {
  const [enviando, setEnviando] = useState(false);

  function manejarEnvio(e) {
    e.preventDefault();
    setEnviando(true);

    const form = e.target;
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => {
        setEnviando(false);
        if (res.ok) {
          toast.success("Mensaje enviado con éxito!");
          form.reset();
        } else {
          toast.error("Error al enviar el mensaje, intentá nuevamente.");
        }
      })
      .catch(() => {
        setEnviando(false);
        toast.error("Error al enviar el mensaje, intentá nuevamente.");
      });
  }

  return (
    <ContactWrapper aria-labelledby="contacto-titulo" id="form">
      <Helmet>
        <title>Contacto | Delicias del Alma</title>
        <meta
          name="description"
          content="Envíanos tus dudas, sugerencias o pedidos especiales. Estamos para ayudarte con todo lo que necesites sobre nuestras delicias."
        />
      </Helmet>

      <h2 id="contacto-titulo">Contáctanos</h2>
      <p>
        Si tienes preguntas, sugerencias o deseas realizar un pedido, no dudes en enviarnos un mensaje. Estamos aquí para ayudarte y hacer que tu experiencia con nuestras delicias sea inolvidable.
      </p>

      <FormContainer>
        <div className="col-12 col-md-8 col-lg-6">
          <StyledForm
            action="https://formspree.io/f/meojblol"
            method="POST"
            onSubmit={manejarEnvio}
            aria-label="Formulario de contacto"
          >
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <FormInput
              type="text"
              name="name"
              id="name"
              placeholder="Escriba su nombre aquí"
              required
              aria-required="true"
            />

            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              id="email"
              placeholder="Escriba su email aquí"
              required
              aria-required="true"
            />

            <FormLabel htmlFor="message">Mensaje</FormLabel>
            <FormTextarea
              name="message"
              id="message"
              placeholder="Escriba su mensaje aquí"
              rows="4"
              cols="50"
              required
              aria-required="true"
            />

            <SubmitButton
              type="submit"
              disabled={enviando}
              aria-disabled={enviando}
              aria-label={enviando ? "Enviando mensaje..." : "Enviar mensaje"}
            >
              {enviando ? "Enviando..." : <>Enviar <FaPaperPlane aria-hidden="true" style={{ marginLeft: "8px" }} /></>}
            </SubmitButton>
          </StyledForm>
        </div>
      </FormContainer>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </ContactWrapper>
  );
}