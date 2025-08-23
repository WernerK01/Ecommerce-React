import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { database } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import CustomButton from "../../common/CustomButton/CustomButton";

export const Checkout = () => {
    const [user, setUser] = useState({
    name: "",
    contact: "",
    mail: "",
  });

  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let order = {
      buyer: user,
      items: cart,
      total: getTotalAmount(),
    };

    const ordersCollection = collection(database, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);

      cart.forEach((item) => {
        const refDoc = doc(database, "products", item.id);
        updateDoc(refDoc, {
          stock: item.stock - item.quantity,
        });
      });

      resetCart();
      setUser({
        name: "",
        contact: "",
        mail: "",
      });
    });
  };

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        {orderId ? (
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl font-bold text-green-600 mb-4">¡Compra realizada con éxito!</h2>
            <p className="text-lg text-gray-700 mb-2">Tu código de orden es:</p>
            <span className="text-xl font-mono bg-green-100 text-green-700 px-4 py-2 rounded">{orderId}</span>
            <p className="mt-6 text-gray-500">Gracias por tu compra, pronto recibirás novedades en tu correo.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">Finalizar compra</h2>
            <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={user.name}
                onChange={handleChange}
                required
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <input
                type="text"
                name="contact"
                placeholder="Teléfono o WhatsApp"
                value={user.contact}
                onChange={handleChange}
                required
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <input
                type="email"
                name="mail"
                placeholder="Correo electrónico"
                value={user.mail}
                onChange={handleChange}
                required
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <CustomButton
                name="Confirmar compra"
                click={handleSubmit}
                disabled={!user.name || !user.contact || !user.mail}
              />
            </form>
            <div className="bg-indigo-50 rounded-xl p-4 shadow mb-2">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">Resumen del pedido</h3>
              <ul className="mb-2">
                {cart.map(item => (
                  <li key={item.id} className="flex justify-between items-center py-1 border-b last:border-b-0">
                    <span className="font-medium text-gray-700">{item.title} x {item.quantity}</span>
                    <span className="font-bold text-indigo-800">${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="font-bold text-gray-800">Total:</span>
                <span className="text-xl font-bold text-blue-700">${getTotalAmount()}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;