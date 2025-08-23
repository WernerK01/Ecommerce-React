import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext.jsx";
import './CartWidget.css';

export const CartWidget = () => {
  const { getTotalQuanty } = useContext(CartContext);
  let total = getTotalQuanty()

  return (
    <Link to='/cart' className="relative flex items-center">
      <FaShoppingCart className="text-2xl text-white" />
      {total > 0 && (<span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{total} </span>)}
    </Link>
  );
}

export default CartWidget;