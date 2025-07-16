import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from "./context/CarritoContext";
import { AuthProvider } from './context/AuthContext.jsx';
import { ProductosProvider } from "./context/ProductosContext";
import GlobalStyles from './styled/GlobalStyles.js';
//import './assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from "react-helmet-async";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <CarritoProvider>
            <ProductosProvider>
              <GlobalStyles />
              <App />
            </ProductosProvider>
          </CarritoProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
