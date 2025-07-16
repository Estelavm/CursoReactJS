// ProductListStyles.js
import styled from "@emotion/styled";

export const Titulo = styled.h2`
  font-family: var(--font-family-header);
  font-weight: var(--font-weight-bold);
  margin-top: 15vh;
  text-align: center;
  color: var(--color-text);
`;

export const ContenedorProductos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  border-bottom: 2px solid #ddd;
  width: 100%;
  padding: 0 5%;
  z-index: 2;
`;

export const TarjetaProducto = styled.div`
  background: var(--background-color-header);
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin: 10px;
  flex: 1 1 300px;
  width: 350px;
  min-height: 450px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    max-width: 100%;
    height: 40vh;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  h3 {
    font-family: var(--font-family-main);
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--color-text);
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
  }
`;

export const Precio = styled.p`
  font-size: 1.2rem;
  font-weight: bolder;
  margin-top: 10px;
`;

export const BotonAgregar = styled.button`
  background-color: #4a2a6a;
  color: #ff5733;
  border: 2px solid #a355c0;
  padding: 10px 15px;
  font-family: var(--font-family-main);
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #a355c0;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const BotonDescripcion = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5849d8;
  }
`;
