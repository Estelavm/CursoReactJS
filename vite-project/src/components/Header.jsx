import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/Images/Logo.png";
import {
  HeaderStyled,
  Nav,
  ContainerFluid,
  Logo,
  MenuToggle,
  NavbarCollapse,
  NavLinks,
  LinkItem,
} from "../styled/HeaderStyles";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

export default function HeaderComponent() {
  const [activo, setActivo] = useState(false);
  const location = useLocation();
  const { usuario, estaLogueado, logout } = useAuth();

  useEffect(() => {
    setActivo(false);
  }, [location]);

  function manejarLogout() {
    logout();
    toast.success("Sesión cerrada correctamente");
  }

  return (
    <>
      <Helmet>
        <title>Delicias del Alma - Pastelería Online</title>
        <meta
          name="description"
          content="Delicias del Alma es tu pastelería online con productos artesanales, reseñas de clientes y contacto directo. ¡Conocé nuestras tortas!"
        />
      </Helmet>

      <HeaderStyled>
        <div className="container">
          <Nav
            className="row align-items-center justify-content-between"
            aria-label="Menú de navegación principal"
          >
            <ContainerFluid className="col-12 d-flex justify-content-between align-items-center flex-wrap">
              <Logo>
                <img src={logo} alt="Logo de Delicias del Alma" />
                <span>Delicias del Alma</span>
              </Logo>

              <MenuToggle
                onClick={() => setActivo(!activo)}
                aria-label={activo ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={activo}
                aria-controls="navbarNav"
              >
                &#9776;
              </MenuToggle>

              <NavbarCollapse
                className={activo ? "active" : ""}
                id="navbarNav"
                role="navigation"
              >
                <NavLinks className="nav-links">
                  <LinkItem>
                    <Link to="/#presentacion">Inicio</Link>
                  </LinkItem>
                  <LinkItem>
                    <Link to="/#productos">Productos</Link>
                  </LinkItem>
                  <LinkItem>
                    <Link to="/#opiniones">Reseñas</Link>
                  </LinkItem>
                  <LinkItem>
                    <Link to="/#form">Contacto</Link>
                  </LinkItem>

                  {estaLogueado && usuario?.rol === "admin" && (
                    <LinkItem className="Links">
                      <Link to="/admin/productos" onClick={() => setActivo(false)}>
                        Gestionar Productos
                      </Link>
                    </LinkItem>
                  )}

                  <LinkItem className="Links cart">
                    <Link
                      to="/carrito"
                      onClick={() => setActivo(false)}
                      aria-label="Ir al carrito"
                    >
                      <FaShoppingCart size={20} />
                    </Link>
                  </LinkItem>

                  <LinkItem className="Links cart">
                    {estaLogueado ? (
                      <button
                        className="btn-login"
                        onClick={manejarLogout}
                        aria-label="Cerrar sesión"
                      >
                        Cerrar sesión
                      </button>
                    ) : (
                      <Link className="btn-login" to="/login" aria-label="Iniciar sesión">
                        Iniciar sesión
                      </Link>
                    )}
                  </LinkItem>
                </NavLinks>
              </NavbarCollapse>
            </ContainerFluid>
          </Nav>
        </div>
      </HeaderStyled>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}