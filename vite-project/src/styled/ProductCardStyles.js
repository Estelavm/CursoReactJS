/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-color-header);
  color: black;
  padding: 20px;
  margin: 10px;
  flex: 1 1 300px;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  min-height: 450px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100%;
    height: 40vh;
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }

  h2 {
    font-family: var(--font-family-header);
    font-size: 1.4rem;
    margin: 10px 0;
    text-align: center;
  }

  .precio {
    font-size: 1.2rem;
    font-weight: bolder;
    margin: 10px 0;
  }

  .descripcion-ampliada {
    margin-top: 10px;
    padding: 10px;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    line-height: 1.4;
  }

  .btn-descripcion {
    margin-top: 2vh;
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

    &.btn-agregar {
      background-color: #4a2a6a;
      color: #ff5733;
      border: 2px solid #a355c0;
      font-weight: bold;
      font-family: var(--font-family-main);

      &:hover {
        background-color: #a355c0;
        color: #fff;
      }
    }
  }
`;
