import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Navbar />

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/pizzas"
            element={<Pizzas />}
          />
          <Route
            path="/pizza/:ident"
            element={<Pizza />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/*"
            element={<NotFound />}
          />
        </Routes>
      </main>
    </div>
  );
}
