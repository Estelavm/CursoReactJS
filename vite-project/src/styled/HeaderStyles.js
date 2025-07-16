import styled from "@emotion/styled";
import backgroundImage from "../assets/Images/Background_Image.jpeg";

export const HeaderStyled = styled.header`
  font-family: var(--font-family-header);
  font-weight: var(--font-weight-bold);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  overflow: hidden;
  padding: 5%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    pointer-events: none; 
  }

  > * {
   position: relative;
   z-index: 2;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;

  .nav-links {
   display: flex;
 }
`;

export const ContainerFluid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
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

export const MenuToggle = styled.button`
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 20px;

  @media (max-width: 850px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 10px;
    z-index: 20;
  }

  @media (max-width: 650px) {
    margin: 0 20vw;
  }
`;

export const NavbarCollapse = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  .nav-links {
    display: flex; 
  }

  &.active .nav-links {
    display: flex;
    position: relative;
    z-index: 10;
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    .nav-links {
      flex-direction: column;
      position: absolute;
      right: 10px;
      top: 15vh;
      background-color: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 80vw;
      padding: 20px 0;
      display: none; 
    }

    &.active .nav-links {
      display: flex;
    }

    .nav-links li {
      margin: 10px 0;
    }
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  position: relative;
  z-index: 10;

  @media (max-width: 1500px) {
    margin: 0 30vw;
  }

  @media (max-width: 1300px) {
    margin: 0 20vw;
  }

  @media (max-width: 1100px) {
    margin: 0 10vw;
  }

  @media (max-width: 950px) {
    margin: 0 5vw;
  }
`;

export const LinkItem = styled.li`
  display: inline-block;
  position: relative;
  z-index: 2;

  a,
  button {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    font-family: var(--font-family-header);
    background-color: var(--background-color-list);
    margin: 10px;
    border-radius: var(--border-radius-links);
    font-size: 16px;
    font-weight: 500;
    color: #000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: color 0.3s, transform 0.3s, box-shadow 0.3s;
    padding: 5px 10px;
    white-space: nowrap;
    height: 36px;
    line-height: 26px;

    &:hover {
      background-color: #f5a623;
      transform: scale(1.1);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
  }

  &.cart a {
    border: 2px solid #a355c0;
    padding: 5px 10px;
    min-width: 100px; 
    justify-content: center;

    i {
      font-size: 20px;
      width: 3vw;
      color: #ff5733;
      transition: all 0.3s ease;
      text-align: center;
      
    }

    &:hover i {
      color: #7f3d92;
    }
  }

  .btn-login {
    background-color: #4a2a6a;
    color: #ff5733;
    border: 2px solid #a355c0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #7f3d92;
      transform: scale(1.1);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

