import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario.trim() === "" || contrasena.trim() === "") {
      alert("Por favor, completá todos los campos");
      return;
    }

    if (usuario === "admin" && contrasena === "123") {
      login({ nombre: "admin", rol: "admin" });
      navigate("/");
    } else if (usuario === "user" && contrasena === "456") {
      login({ nombre: "user", rol: "user" });
      navigate("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <section className="login">
      <h2>Iniciar sesión</h2>
      <form onSubmit={manejarLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}
