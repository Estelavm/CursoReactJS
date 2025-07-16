import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header"; 
import Footer from "./Footer"; 

const LayoutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-general);
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem 1rem;
`;

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <Main className="container">{children}</Main> {/* grilla de Bootstrap */}
      <Footer />
    </LayoutContainer>
  );
}
