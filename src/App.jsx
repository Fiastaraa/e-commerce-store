import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen flex flex-col bg-gray-50">

        <Header />

        <main className="flex-1">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/products"
              element={<Products />}
            />

            <Route
              path="/products/:id"
              element={<ProductDetail />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;