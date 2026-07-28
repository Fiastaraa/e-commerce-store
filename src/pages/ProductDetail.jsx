import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";

export default function ProductDetail() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto py-24 text-center">

        <h1 className="text-5xl font-bold">
          Product Not Found
        </h1>

        <p className="text-gray-500 mt-4">
          Sorry, the product you're looking for doesn't exist.
        </p>

        <Link to="/products">
          <Button className="mt-8">
            Back to Products
          </Button>
        </Link>

      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <Link to="/products">

        <Button
          variant="outline"
          className="mb-8"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back
        </Button>

      </Link>

      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}

        <img
          src={product.image}
          alt={product.name}
          className="
          rounded-3xl
          shadow-xl
          w-full
          object-cover
          "
        />

        {/* CONTENT */}

        <div>

          <span className="text-blue-600 font-semibold">
            {product.category}
          </span>

          <h1 className="text-5xl font-bold mt-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-5">

            <Star
              className="fill-yellow-400 text-yellow-400"
              size={22}
            />

            <span className="font-semibold">
              {product.rating}
            </span>

          </div>

          <h2 className="text-4xl text-blue-600 font-bold mt-8">
            Rp {product.price.toLocaleString("id-ID")}
          </h2>

          <p className="text-gray-500 mt-3">
            Stock : {product.stock}
          </p>

          <p className="text-gray-700 leading-8 mt-8">
            {product.description}
          </p>

          <Button
            size="lg"
            className="mt-10"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="mr-2" size={20} />

            Add To Cart
          </Button>

        </div>

      </div>

    </section>
  );
}