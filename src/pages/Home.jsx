import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Featured Products */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h2 className="text-4xl font-bold">
              Featured Products
            </h2>

            <p className="text-gray-500 mt-2">
              Best selling products this week.
            </p>

          </div>

          <Link to="/products">
            <Button>
              View All Products
            </Button>
          </Link>

        </div>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>

      {/* Statistics */}

      <section className="bg-blue-600 text-white py-16">

        <div
          className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
          text-center
          "
        >
          <div>
            <h2 className="text-5xl font-bold">
              500+
            </h2>

            <p className="mt-2">
              Products
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">
              5K+
            </h2>

            <p className="mt-2">
              Customers
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">
              4.9★
            </h2>

            <p className="mt-2">
              Rating
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">
              24/7
            </h2>

            <p className="mt-2">
              Support
            </p>
          </div>

        </div>

      </section>
    </>
  );
}