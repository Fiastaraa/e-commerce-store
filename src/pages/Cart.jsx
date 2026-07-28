import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="min-h-[70vh] flex flex-col justify-center items-center">

        <ShoppingBag
          size={80}
          className="text-gray-400"
        />

        <h1 className="text-4xl font-bold mt-6">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mt-3">
          Looks like you haven't added any products yet.
        </p>

        <Link to="/products">

          <Button
            size="lg"
            className="mt-8"
          >
            Start Shopping
          </Button>

        </Link>

      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-12">
        Shopping Cart
      </h1>

      <div className="space-y-6">

        {cart.map((item) => (

          <div
            key={item.id}
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            flex
            flex-col
            md:flex-row
            items-center
            gap-6
            "
          >

            <img
              src={item.image}
              alt={item.name}
              className="
              w-36
              h-36
              rounded-xl
              object-cover
              "
            />

            <div className="flex-1">

              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="text-gray-500">
                {item.category}
              </p>

              <h3 className="text-blue-600 font-bold text-2xl mt-4">
                Rp {item.price.toLocaleString("id-ID")}
              </h3>

            </div>

            {/* Quantity */}

            <div className="flex items-center gap-3">

              <Button
                variant="outline"
                onClick={() =>
                  decreaseQty(item.id)
                }
              >
                <Minus size={18} />
              </Button>

              <span className="text-xl font-bold">
                {item.quantity}
              </span>

              <Button
                variant="outline"
                onClick={() =>
                  increaseQty(item.id)
                }
              >
                <Plus size={18} />
              </Button>

            </div>

            {/* Remove */}

            <Button
              variant="destructive"
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              <Trash2 size={18} />
            </Button>

          </div>

        ))}

      </div>

      {/* Summary */}

      <div
        className="
        mt-12
        bg-blue-50
        rounded-2xl
        p-8
        "
      >

        <div className="flex justify-between text-2xl font-bold">

          <span>Total</span>

          <span className="text-blue-600">
            Rp {totalPrice.toLocaleString("id-ID")}
          </span>

        </div>

        <Button
          size="lg"
          className="w-full mt-8"
        >
          Checkout
        </Button>

      </div>

    </section>
  );
}