import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from "./context/CarritoContext";
import { AuthProvider } from './context/AuthContext.jsx';
import { ProductosProvider } from "./context/ProductosContext";
import './assets/styles/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CarritoProvider>
          <ProductosProvider>
            <App />
          </ProductosProvider>
        </CarritoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
