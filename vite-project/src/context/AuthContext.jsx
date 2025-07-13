/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const savedUser = localStorage.getItem("usuario");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);


  const login = (datosUsuario) => setUsuario(datosUsuario);
  const logout = () => setUsuario(null);

  const estaLogueado = usuario !== null;

  return (
    <AuthContext.Provider value={{ usuario, estaLogueado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
