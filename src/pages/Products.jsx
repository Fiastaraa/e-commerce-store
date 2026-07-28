import { useState } from "react";
import products from "../data/products";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

export default function Products() {
  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const filteredProducts =
    products.filter((product) => {
      const matchSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchCategory =
        category === "All" ||
        product.category === category;

      return (
        matchSearch &&
        matchCategory
      );
    });

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Our Products
        </h1>

        <p className="text-gray-500 mt-3">
          Find your favorite electronic products.
        </p>

      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <div
        className="
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        "
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20">

            <h2 className="text-3xl font-bold">
              Product Not Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try another keyword or category.
            </p>

          </div>
        )}
      </div>

    </section>
  );
}