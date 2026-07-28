import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <p className="uppercase tracking-widest text-sm font-semibold mb-4">
            Best Electronic Store
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Everything You Need
            <br />
            For Your Setup.
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Find Gaming Laptop,
            Mechanical Keyboard,
            Wireless Mouse,
            Monitor,
            Headset,
            and more.
          </p>

          <div className="flex gap-4 mt-10">

            <Link to="/products">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Shop Now

                <ArrowRight
                  size={18}
                  className="ml-2"
                />
              </Button>
            </Link>

            <Link to="/cart">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Cart
              </Button>
            </Link>

          </div>
        </div>

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
            alt="Hero"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}