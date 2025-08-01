import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { title, price, id, imageUrl } = product;
  return (
    <Link to={`/detalle/${id}`}
        className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 m-2 cursor-pointer transition hover:shadow-lg"
        style={{ textDecoration: "none" }}>

      <img src={imageUrl} alt={title} className="aspect-square w-48 rounded-lg bg-gray-200 object-cover mb-2" />
      <h3 className="text-base font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-lg font-bold text-gray-900">${price}</p>
    </Link>
  );
};

export default ProductCard;