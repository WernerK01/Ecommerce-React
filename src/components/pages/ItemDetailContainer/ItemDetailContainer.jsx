import { useEffect, useState } from "react";
import { productsMock } from "../../../productsMock";
import { useParams } from "react-router";
import ProductCard from "../../common/ProductCard/ProductCard";
const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const element = productsMock.find((producto) => producto.id === id);
    setProduct(element);
  }, [id]);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="aspect-square w-64 rounded-lg bg-gray-200 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
      <p className="text-xl font-bold text-gray-900 mb-2">${product.price}</p>
      <p className="text-gray-600">{product.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;