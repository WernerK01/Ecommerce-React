import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../context/CartContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const cartContext = useContext(CartContext);
  let total = cartContext?.getTotalQuanty ? cartContext.getTotalQuanty() : 0;

  return (
    <Link to='/cart' className="relative flex items-center">
      <FaShoppingCart className="text-2xl text-white" />
      {total > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
          {total}
        </span>
      )}
    </Link>
  );
}