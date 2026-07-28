import {
  Facebook,
  Github,
  Instagram,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>

          <h2 className="text-2xl font-bold">
            InventoryHub
          </h2>

          <p className="mt-4 text-gray-400">
            Modern E-Commerce Store
            built with React,
            Tailwind CSS,
            React Router,
            and ShadCN UI.
          </p>

        </div>

        <div>

          <h3 className="font-semibold text-lg">
            Navigation
          </h3>

          <ul className="mt-4 space-y-2 text-gray-400">

            <li>Home</li>

            <li>Products</li>

            <li>Shopping Cart</li>

          </ul>

        </div>

        <div>

          <h3 className="font-semibold text-lg">
            Contact
          </h3>

          <div className="mt-4 flex gap-4">

            <Facebook className="hover:text-blue-400 cursor-pointer" />

            <Instagram className="hover:text-pink-500 cursor-pointer" />

            <Github className="hover:text-gray-300 cursor-pointer" />

            <Mail className="hover:text-red-400 cursor-pointer" />

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-6 text-center text-gray-400">

        © 2026 InventoryHub.
        All Rights Reserved.

      </div>

    </footer>
  );
}