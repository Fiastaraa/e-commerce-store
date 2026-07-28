const categories = [
  "All",
  "Laptop",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Headset",
  "Microphone",
];

export default function CategoryFilter({
  category,
  setCategory,
}) {
  return (
    <div
      className="
      flex
      flex-wrap
      gap-3
      mt-6
      "
    >
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`
          px-5
          py-2
          rounded-full
          transition
          ${
            category === item
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-blue-100"
          }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
}