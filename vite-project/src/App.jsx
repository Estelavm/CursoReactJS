import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import './assets/styles/style.css';

function App() {
  const location = useLocation();
  const [estaLogueado, setEstaLogueado] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Header estaLogueado={estaLogueado} setEstaLogueado={setEstaLogueado} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/carrito" element={
              <ProtectedRoute estaLogueado={estaLogueado}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setEstaLogueado={setEstaLogueado} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
