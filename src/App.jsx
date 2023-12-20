import "./App.scss"; // Se importan estilos de scss
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Se importan las rutas
import Home from "./components/Home/Home.jsx"; // Se importa el componente Home
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"; // Se importa el componente ItemListContainer
import NavbarComponent from "./components/Navbar/Navbar.jsx"; // Se importa el componente Navbar
import Error from "./components/Error/Error.jsx"; // Se importa el componente Error
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer.jsx";

function App() {
  return (
    <div className="bg">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travelvip" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/destino/:id" element={<ProductDetailContainer />} />
          <Route path="/cotizador" element={<Home />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/settings" element={<Home />} />
          <Route path="/logout" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
