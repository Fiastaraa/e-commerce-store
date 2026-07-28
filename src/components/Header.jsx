import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();

  const totalItem = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navClass = ({ isActive }) =>
    isActive
      ? "bg-blue-600 text-white"
      : "bg-white text-gray-700 hover:bg-blue-50";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <Store className="text-blue-600" size={32} />

          <div>
            <h1 className="font-bold text-2xl">
              InventoryHub
            </h1>

            <p className="text-xs text-gray-500">
              Electronics Store
            </p>
          </div>
        </Link>

        {/* Menu */}

        <nav className="flex items-center gap-3">

          <NavLink to="/">
            {({ isActive }) => (
              <Button
                className={navClass({ isActive })}
              >
                Home
              </Button>
            )}
          </NavLink>

          <NavLink to="/products">
            {({ isActive }) => (
              <Button
                className={navClass({ isActive })}
              >
                Products
              </Button>
            )}
          </NavLink>

          <NavLink to="/cart">
            {({ isActive }) => (
              <Button
                className={`relative ${navClass({
                  isActive,
                })}`}
              >
                <ShoppingCart
                  size={18}
                  className="mr-2"
                />

                Cart

                {totalItem > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                    {totalItem}
                  </span>
                )}
              </Button>
            )}
          </NavLink>

        </nav>
      </div>
    </header>
  );
}