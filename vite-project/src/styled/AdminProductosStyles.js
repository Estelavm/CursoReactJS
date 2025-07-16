import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-family: var(--font-family-header);
  font-weight: var(--font-weight-bold);
  margin-bottom: 2rem;
  text-align: center;
`;

export const Subtitle = styled.h3`
  font-family: var(--font-family-header);
  font-weight: var(--font-weight-bold);
  margin: 5rem 0 2.5rem;
  text-align: center;
`;

export const FormStyled = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  min-height: 100px;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4a2a6a;
  color: #ff5733;
  font-weight: bold;
  border: 2px solid #a355c0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  align-self: center;

  &:hover {
    background-color: #a355c0;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const ProductCard = styled.div`
  background-color: var(--background-color-list);
  color: black;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 350px;
  min-height: 450px;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .precio {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  button {
    margin: 0.3rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: 40vh;
  margin-bottom: 1rem;
  object-fit: cover;
  border-radius: 5px;
`;
