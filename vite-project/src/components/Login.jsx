import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/Images/Logo.png";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  LoginContainer,
  LoginSection,
  LogoySpan,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
} from "../styled/LoginStyles";
import { Helmet } from "react-helmet-async";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario.trim() === "" || contrasena.trim() === "") {
      toast.error("Por favor, completá todos los campos");
      return;
    }

    if (usuario === "admin" && contrasena === "123") {
      login({ nombre: "admin", rol: "admin" });
      toast.success("Bienvenido administrador");
      navigate("/");
    } else if (usuario === "user" && contrasena === "456") {
      login({ nombre: "user", rol: "user" });
      toast.success("Inicio de sesión exitoso");
      navigate("/");
    } else {
      toast.error("Usuario o contraseña incorrectos");
    }
  };

 return (
    <LoginContainer className="container">
      <Helmet>
        <title>Iniciar sesión | Delicias del Alma</title>
        <meta
          name="description"
          content="Accedé a tu cuenta para gestionar pedidos y productos en Delicias del Alma."
        />
      </Helmet>

      <LoginSection>
        <LogoySpan>
          <img src={Logo} alt="Logo de Delicias del Alma" style={{ width: "120px", marginBottom: "20px" }} />
          <span>Delicias del Alma</span>
        </LogoySpan>
        <LoginTitle>Iniciar sesión</LoginTitle>
        <LoginForm onSubmit={manejarLogin}>
          <label htmlFor="usuario" className="visually-hidden">Usuario</label>
          <LoginInput
            id="usuario"
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            aria-label="Usuario"
          />

          <label htmlFor="contrasena" className="visually-hidden">Contraseña</label>
          <LoginInput
            id="contrasena"
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            aria-label="Contraseña"
          />

          <LoginButton type="submit" aria-label="Entrar al sistema">
            <FaSignInAlt /> Entrar
          </LoginButton>
        </LoginForm>
      </LoginSection>
    </LoginContainer>
  );
}