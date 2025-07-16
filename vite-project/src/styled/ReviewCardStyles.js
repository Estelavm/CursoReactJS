import styled from "@emotion/styled";

export const TituloResenas = styled.h2`
  width: 100%;
  text-align: center;
  margin: 10px 0;
  font-family: var(--font-family-header);
`;

export const ParrafoResenas = styled.p`
  width: 100%;
  text-align: center;
  margin: 10px 0;
  color: var(--color-text);
  font-family: var(--font-family-main);
  font-size: 1rem;
`;

export const OpinionesSection = styled.section`
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  grid-template-rows: auto 1fr;
  gap: 5vw;
  width: 100vw;
  padding: 5% 0;
  justify-items: center;
  border-bottom: 2px solid #ddd;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 400px;
  text-align: center;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-family: var(--font-family-main);
    font-weight: bold;
    margin: 10px 0;
    color: var(--color-text);
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: var(--color-text);
  }
`;
