import { useState, useContext } from "react";
import CustomButton from "../CustomButton/CustomButton.jsx";
import { CartContext } from "../../../context/CartContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Counter.css';

const Counter = ({ item }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const increment = () => {
    if(count + 1 > item.stock) {
        toast.info("¡No hay más stock disponible!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            theme: "colored",
        });
        return;
    }
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) {
        toast.info("¡No puedes quitarte más!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            theme: "colored",
        });
        return;
    }
    setCount(count - 1);
  };

  const handleAdd = () => {
    if(count === 0) {
        toast.error("¡Debes al menos agregar 1 producto!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            theme: "colored",
        });
        return;
    }
    addToCart({ ...item, quantity: count });
    toast.success(`${count} ${item.title} agregado al carrito`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <CustomButton name="-" click={decrement} />
        <span className="text-xl countText font-bold px-4">{count}</span>
        <CustomButton name="+" click={increment} />
      </div>
      <CustomButton name="Agregar al carrito" click={handleAdd} />
    </div>
  );
};

export default Counter;