import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx";
import { Link, useNavigate } from "react-router";
import CustomButton from "../../common/CustomButton/CustomButton.jsx";

const Cart = () => {
  const { cart, resetCart, removeByID, getTotalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Tu carrito está vacío</h2>
        <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Ir a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-2">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Tu carrito</h2>
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Producto</th>
              <th className="py-2">Cantidad</th>
              <th className="py-2">Precio</th>
              <th className="py-2">Subtotal</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-100 transition">
                <td className="py-4 flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-contain rounded" />
                  <span className="font-semibold">{item.title}</span>
                </td>
                <td className="py-4">{item.quantity}</td>
                <td className="py-4">${item.price}</td>
                <td className="py-4 font-bold">${item.price * item.quantity}</td>
                <td className="py-4">
                  <CustomButton
                    name="Eliminar"
                    click={() => removeByID(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-8">
          <CustomButton
            name="Vaciar carrito"
            click={resetCart}
          />
          <div className="text-2xl font-bold text-blue-700">
            Total: ${getTotalAmount()}
          </div>
          <CustomButton
            name="Continuar compra"
            click={() => navigate('/checkout')}
          />
        </div>
      </div>
    </div>
  );

};

export default Cart;