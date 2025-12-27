import { Link } from "react-router-dom";

const cars = [
  { id: "tesla-model-s", name: "Tesla Model S", price: "$85,000" },
  { id: "porsche-taycan", name: "Porsche Taycan", price: "$150,000" },
  { id: "bmw-i4", name: "BMW i4", price: "$70,000" },
];

export default function Cars() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Electric Cars</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Link
            key={car.id}
            to={`/cars/${car.id}`}
            className="bg-white text-black rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="font-semibold">{car.name}</h2>
            <p className="text-sm text-gray-600">{car.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
