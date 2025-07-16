import { Routes, Route, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { CarritoProvider } from "./context/CarritoContext";
import Header from './components/Header.jsx';
import Presentacion from './components/Presentation.jsx';
import ProductList from './components/ProductList.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import Opiniones from './components/ReviewCard.jsx';
import Cart from './components/Cart.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Login from './components/Login.jsx';
import AdminProductos from "./components/AdminProductos";
import GlobalStyles from './styled/GlobalStyles.js';
import Layout from "./components/Layout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import './assets/styles/style.css';

function App() {
  const location = useLocation();

  useEffect(() => {
  if (location.pathname === "/" && location.hash) {
    const id = location.hash.replace("#", "");
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
    setTimeout(scroll, 300);
  }
}, [location]);


  return (
    <CarritoProvider>
      <GlobalStyles />
      <ToastContainer />
      <main>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <>
                    <section id="presentacion">
                      <Presentacion />
                    </section>
                    <section id="productos">
                      <ProductList />
                    </section>
                    <section id="destacados">
                      <FeaturedProducts />
                    </section>
                    <section id="opiniones">
                      <Opiniones />
                    </section>
                    <section id="form">
                      <ContactForm />
                    </section>
                  </>
                </Layout>
              }
            />
            <Route path="/carrito" element={
              <Layout>
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="/admin/productos" element={
              <Layout>
                <ProtectedRoute>
                  <AdminProductos />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
      </main>
      
    </CarritoProvider>
  );
}

export default App;
