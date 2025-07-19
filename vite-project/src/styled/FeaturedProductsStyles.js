import styled from "styled-components";
import { Card } from "../styled/ProductCardStyles";

export const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  margin-top: 5rem;
  font-family: var(--font-family-header);
  font-weight: var(--font-weight-bold);
`;

export const ProductosGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  border-bottom: 2px solid #ddd;
  z-index: 2;
`;

export const ProductoCard = Card;  

export const Precio = styled.p`
  font-size: 1.2rem;
  font-weight: bolder;
`;

export const BotonAgregar = styled.button`
  margin-top: 10px;
  background-color: var(--background-color-list);
  color: black;
  border: 2px solid #a355c0;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 15px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #a355c0;
    color: #fff;
  }
`;
