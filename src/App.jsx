import "./App.scss"; // Se importan estilos de scss
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Se importan las rutas
import Home from "./components/Hero/Hero.jsx"; // Se importa el componente Home
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"; // Se importa el componente ItemListContainer
import NavbarComponent from "./components/Navbar/Navbar.jsx"; // Se importa el componente Navbar
import Error from "./components/Error/Error.jsx"; // Se importa el componente Error
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer.jsx";

function App() {
  return (
    <div className="App">
      <div className="bg">
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travelvip" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/destino/:id" element={<ProductDetailContainer />} />
            <Route path="/cotizador" element={<Error />} />
            <Route path="/cart" element={<Error />} />
            <Route path="/profile" element={<Error />} />
            <Route path="/settings" element={<Error />} />
            <Route path="/logout" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
