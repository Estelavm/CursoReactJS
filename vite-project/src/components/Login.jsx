import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setEstaLogueado }) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario.trim() !== "" && contrasena.trim() !== "") {
      setEstaLogueado(true);
      navigate("/");
    } else {
      alert("Por favor, completá todos los campos");
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
