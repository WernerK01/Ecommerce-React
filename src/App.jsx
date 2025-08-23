import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/layout/Navbar/Navbar"
import NotFound from "./components/pages/notFound/NotFound"
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/pages/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import Checkout from "./components/pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CartContextProvider>
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App
