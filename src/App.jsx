import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer.jsx"
import { Navbar } from "./components/layout/Navbar/Navbar.jsx"
import NotFound from "./components/pages/notFound/NotFound.jsx"
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/pages/Cart/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
