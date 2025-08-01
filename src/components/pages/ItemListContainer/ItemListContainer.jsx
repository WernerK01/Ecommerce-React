import './ItemListContainer.css';
import { useEffect, useState } from "react";
import { productsMock } from "../../../productsMock";
import { useParams } from "react-router";
import ProductCard from '../../common/ProductCard/ProductCard.jsx';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();


  useEffect(() => {
    const filterProducts = productsMock.filter((product) => product.category === name)

    const getProducts = new Promise((resolve) => {
      resolve(name ? filterProducts : productsMock);
    });

    getProducts.then((res) => setItems(res));
  }, [name])

  return (
    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {items.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}
