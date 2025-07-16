/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const ContactWrapper = styled.div`
  text-align: center;
  padding: 5%;

  h2 {
    font-family: var(--font-family-header);
    font-weight: var(--font-weight-bold);
    font-size: 2rem;
    color: var(--color-text);
    margin-bottom: 1vh;
  }

  p {
    font-family: var(--font-family-main);
    font-size: 1rem;
    color: #333;
    margin-bottom: 5vh;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  display: flex; 
  padding: 50px;
  flex-direction: column;
  background-color: white;
  border-radius: 8px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  align-items: center;
  width: 100%;
  max-width: 600px;
`;


export const FormLabel = styled.label`
  display: block;
  width: 90%;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
`;

export const FormInput = styled.input`
  width: 90%;
  padding: 8px; 
  font-size: 1rem;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: var(--font-family-main);
`;

export const FormTextarea = styled.textarea`
  width: 90%;
  padding: 8px; 
  font-size: 1rem;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: var(--font-family-main);
`;

export const SubmitButton = styled.button`
  width: 50%;
  align-self: center;
  padding: 12px 5px; 
  background-color: var(--background-color-list); 
  color: black; 
  border: 2px solid #a355c0; 
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif; 
  font-weight: bold; 
  font-size: 16px; 
  cursor: pointer; 
  text-align: center; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #a355c0; 
    color: #ffffff; 
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); 
    transform: scale(1.05); 
  }

  &:active {
    transform: scale(0.95); 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  }
`;
