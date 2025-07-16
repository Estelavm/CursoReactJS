import styled from "styled-components";

export const Main = styled.main`
  font-family: var(--font-family-main);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  min-height: 100vh;
  background: var(--background-color-header);
`;

export const CarritoContenedor = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const ProductoCarrito = styled.div`
  background-color: var(--background-color-list);
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 100%;
  justify-content: space-between;
`;

export const ImagenProducto = styled.img`
  max-width: 100%;
  height: 40vh;
  margin-bottom: 1rem;
  object-fit: cover;
  border-radius: 5px;
`;

export const Nombre = styled.h3`
  font-family: var(--font-family-main);
  font-weight: bold;
  margin: 10px 0;
  color: var(--color-text);
`;

export const Descripcion = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.5rem 0;
`;

export const Precio = styled.div`
  font-size: 1.2rem;
  font-weight: bolder;
  margin-bottom: 0.5rem;
`;

export const CantidadInput = styled.input`
  width: 60px;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
`;

export const Total = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

export const BotonContenedor = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const Boton = styled.button`
  margin-top: 1rem;
  background-color: #6c63ff;
  width: fit-content;
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.variant === "llamativo" ? "#4a2a6a" : "#6c63ff"};
  color: ${(props) =>
    props.variant === "llamativo" ? "#ff5733" : "#fff"};
  border: ${(props) =>
    props.variant === "llamativo" ? "2px solid #a355c0" : "none"};

  &:hover {
    background-color: #5849d8;
    background-color: ${(props) =>
      props.variant === "llamativo" ? "#a355c0" : "#5849d8"};
    color: ${(props) =>
      props.variant === "llamativo" ? "#fff" : "#fff"};
    transform: ${(props) =>
      props.variant === "llamativo" ? "scale(1.05)" : "none"};
    box-shadow: ${(props) =>
      props.variant === "llamativo" ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none"};
  }
`;

export const LinkStyled = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 8px 16px;
  width: fit-content;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5849d8;
  }
`;
