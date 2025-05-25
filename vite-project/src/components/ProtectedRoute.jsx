import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, estaLogueado }) {
  if (!estaLogueado) {
    return <Navigate to="/login" />;
  }

  return children;
}
