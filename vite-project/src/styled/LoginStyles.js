import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const LoginSection = styled.section`
  font-family: var(--font-family-main);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
  padding: 5%;
  background: var(--background-color-header);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
  max-width: 700px;
`;

export const LogoySpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  z-index: 2;
  height: auto;

  img {
    height: 10vh; 
    width: auto;
  }

  span {
  font-family: var(--font-family-marca);
  font-weight: 900; /* más grueso */
  font-size: 2rem;  /* más grande */
  color: #4a2a6a;   /* un color fuerte */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* resalta en fondo claro o foto */
  letter-spacing: 1px;
}
`;

export const LoginTitle = styled.h2`
  font-family: var(--font-family-header);
  font-weight: var(--font-weight-bold);
  font-size: 1.8rem;
  color: var(--color-text);
  margin-top: 0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5vh;
`;

export const LoginInput = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: var(--font-family-main);
`;

export const LoginButton = styled.button`
  padding: 12px;
  background-color: #4a2a6a;
  color: #ff5733;
  border: 2px solid #a355c0;
  max-width: 100%;
  font-family: var(--font-family-main);
  font-size: 1rem;
  font-weight: bold;
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

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
