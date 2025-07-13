import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import logo from '../assets/Images/Logo.png';

export default function Header() {
  const [activo, setActivo] = useState(false);
  const location = useLocation();
  const { usuario, estaLogueado, logout } = useAuth();

  useEffect(() => {
    setActivo(false);
  }, [location]);

  return (
    <header>
      <nav>
        <div className="container-fluid">
          <div className="Logo d-flex align-items-center">
            <img src={logo} alt="Logo de la marca" className="navbar-logo" />
            <span className="navbar-brand ms-2">Delicias del Alma</span>
          </div>

          <button className="menu-toggle" onClick={() => setActivo(!activo)}>
            &#9776;
          </button>

          <div className={`navbar-collapse ${activo ? "active" : ""}`} id="navbarNav">
            <ul id="nav-links">
              <li className="Links">
                <Link to="/#presentacion">Inicio</Link>
              </li>
              <li className="Links">
                <Link to="/#productos">Productos</Link>
              </li>
              <li className="Links">
                <Link to="/#opiniones">Reseñas</Link>
              </li>
              <li className="Links">
                <Link to="/#form">Contacto</Link>
              </li>

              {estaLogueado && usuario?.rol === "admin" && (
                <li className="Links">
                  <Link to="/admin/productos" onClick={() => setActivo(false)}>Gestionar Productos</Link>
                </li>
              )}

              <li className="Links cart">
                <Link to="/carrito" onClick={() => setActivo(false)}>
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
              <li className="Links cart">
                {estaLogueado ? (
                  <button className="cart-btn btn-login" onClick={logout}>Cerrar sesión</button>
                ) : (
                  <Link className="btn-login" to="/login">Iniciar sesión</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
