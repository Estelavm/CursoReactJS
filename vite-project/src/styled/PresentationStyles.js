import styled from "styled-components";

export const PresentationSection = styled.section`
  border-bottom: 2px solid #ddd;
  width: 100%;
  padding: 5% 0;
  flex-direction: column;
  background-color: transparent;
`;

export const PresentationText = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  max-width: 80vw;
  margin-bottom: 4vh;
  font-family: var(--font-family-main);
`;

export const VideoContainer = styled.div`
  width: 100%
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;
