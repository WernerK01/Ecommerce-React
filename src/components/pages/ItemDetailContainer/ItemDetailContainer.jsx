import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../../context/CartContext";
import ProductCard from "../../common/ProductCard/ProductCard";
import CustomButton from "../../common/CustomButton/CustomButton";
import Counter from "../../common/Counter/Counter";
import './ItemDetailContainer.css'
import { database } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import LoadingWidget from '../../common/LoadingWidget/LoadingWidget.jsx';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let productCollection = collection(database, "products");
    let refDoc = doc(productCollection, id);
    getDoc(refDoc).then((res) => {
      setProduct({ id: res.id, ...res.data() }); 
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div className="w-full min-h-screen p-8 from-blue-50 to-indigo-100">
      {isLoading ? ( <LoadingWidget /> ) : (
          <div className="min-h-screen w-full flex flex-col md:flex-row bg-white px-0 py-0 mt-10">
            <div className="md:w-[45%] w-full flex items-center justify-center bg-white border-b md:border-b-0 md:border-r border-gray-200 p-8">
              <img src={product.imageUrl} alt={product.title} className="object-contain w-full h-[350px] md:h-[500px] max-w-xl rounded-lg" />
            </div>
            <div className="md:w-[55%] w-full flex flex-col justify-start bg-white p-8">
              <div className="flex flex-col gap-2 mb-6">
                { product.stock > 0 ? <span className="text-sm green-600 font-semibold">Stock disponible</span> : <span className="text-sm red-600 font-semibold">Sin stock</span> }
                <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                <span className="text-4xl font-bold blue-700">${product.price}</span>
              </div>
              <div className="mb-8">
                <Counter item={product} />
              </div>
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Descripción</h2>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;