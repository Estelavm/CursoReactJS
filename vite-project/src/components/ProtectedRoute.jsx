import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RutaProtegida({ children }) {
  const { estaLogueado } = useAuth();

  return estaLogueado ? children : <Navigate to="/login" />;
}
