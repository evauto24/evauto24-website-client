import { useParams } from 'react-router-dom';
type car = {
  name: string;
  price: string;
  range: string;
};
const carData: Record<string, car> = {
  'tesla-model-s': {
    name: 'Tesla Model S',
    price: '$85,000',
    range: '652 km',
  },
  'porsche-taycan': {
    name: 'Porsche Taycan',
    price: '$150,000',
    range: '450 km',
  },
  'bmw-i4': {
    name: 'BMW i4',
    price: '$70,000',
    range: '590 km',
  },
};

export default function CarDetail() {
  const { carId } = useParams<{ carId: string }>();
  const car = carId ? carData[carId] : null;

  if (!car) {
    return <div className="p-10 text-center text-red-500">Car not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
      <p className="text-lg text-yellow-400 mb-2">{car.price}</p>
      <p className="text-white/70">Range: {car.range}</p>
    </div>
  );
}
