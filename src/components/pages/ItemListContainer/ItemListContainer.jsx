import './ItemListContainer.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from '../../common/ProductCard/ProductCard.jsx';
import { database } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import LoadingWidget from '../../common/LoadingWidget/LoadingWidget.jsx';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const productsCollection = collection(database, "products");
    const q = name ? query(productsCollection, where("category", "==", name)) : productsCollection;

    let getItems = getDocs(q);
    getItems.then((res) => {
      let products = res.docs.map((product) => {
        return {
          id: product.id,
          ...product.data()
        }
      })
      setItems(products);
      setIsLoading(false);
    });

  }, [name])


  return (
    <div className="w-full min-h-screen p-8 from-blue-50 to-indigo-100">
      {isLoading ? ( <LoadingWidget /> ) : (
      <div className='flex flex-col items-center justify-center min-h-screen text-center'>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {items.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    )}
    </div>
  );
}