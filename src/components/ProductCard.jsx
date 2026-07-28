import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-md
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      {/* Product Image */}

      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="
          w-full
          h-60
          object-cover
          hover:scale-105
          transition
          duration-500
          "
        />

        <span
          className="
          absolute
          top-3
          left-3
          bg-red-500
          text-white
          text-xs
          px-3
          py-1
          rounded-full
          "
        >
          NEW
        </span>

      </div>

      {/* Content */}

      <div className="p-5">

        <p className="text-sm text-blue-600 font-semibold">
          {product.category}
        </p>

        <h2 className="text-2xl font-bold mt-1">
          {product.name}
        </h2>

        {/* Rating */}

        <div className="flex items-center gap-1 mt-3">

          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-semibold">
            {product.rating}
          </span>

        </div>

        {/* Price */}

        <h3 className="text-2xl font-bold text-blue-600 mt-4">
          Rp {product.price.toLocaleString("id-ID")}
        </h3>

        {/* Stock */}

        <p className="text-gray-500 mt-1">
          Stock : {product.stock}
        </p>

        {/* Buttons */}

        <div className="flex gap-3 mt-6">

          <Link
            to={`/products/${product.id}`}
            className="flex-1"
          >
            <Button className="w-full">
              Detail
            </Button>
          </Link>

          <Button
            variant="secondary"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart size={18} />
          </Button>

        </div>

      </div>
    </div>
  );
}