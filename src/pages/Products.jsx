import { useMemo, useState } from "react";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

import products from "../data/products";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        category === "All" || product.category === category;

      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">

      <h1 className="text-5xl font-bold">
        Products
      </h1>

      <p className="text-gray-500 mt-2">
        Browse our latest electronic products.
      </p>

      <div className="mt-10">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">

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
              Try another keyword.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}