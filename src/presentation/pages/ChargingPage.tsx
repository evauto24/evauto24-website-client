import { FaRegCalendarPlus } from 'react-icons/fa6';
import { IoLocation, IoSearch } from 'react-icons/io5';
export default function ChargingStation() {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <h1 className="text-center text-3xl font-bold">CHARGING STATIONS</h1>
      <div className="max-w-md mx-auto my-6 relative">
        <input
          type="text"
          placeholder="Search charging stations..."
          className="w-full border px-10 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        />
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      <h2>Available Stations</h2>

      <div className=" rounded-xl py-5 flex flex-col md:flex-row gap-4 items-center">
        <select className="w-full md:w-1/4 border px-3 py-1 rounded text-black">
          <option>All Stations</option>
          <option>Station Nearby</option>
        </select>
        <select className="w-full md:w-1/4 border px-3 py-1 rounded text-black">
          <option>All Types</option>
          <option>Type A</option>
          <option>Type B</option>
        </select>
        <input className="w-full md:w-1/4 border px-3 py-1 rounded text-black" placeholder="0 kW" />

        <input
          className="w-full md:w-1/4 border px-3 py-1 rounded text-black"
          placeholder="1000 kW"
        />
      </div>
      <div className="bg-white max-w-7xl shadow-lg rounded-md p-5">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/4 flex justify-center md:justify-start">
            <img
              width={300}
              className="rounded-tl-lg rounded-br-lg object-cover"
              src="https://l-ec.co.uk/wp-content/uploads/2024/02/DALL%C2%B7E-2024-02-22-08.49.44-Create-a-wide-image-illustrating-the-range-of-electric-vehicle-EV-charging-station-options-available-including-Level-1-Level-2-and-DC-Fast-Charge.webp"
              alt=""
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 text-sm">
            <p className="font-bold text-2xl mb-1">PP auto</p>
            <p className="text-green-400">
              <strong className="text-black">Status: </strong>Available
            </p>
            <p>
              <strong>Type: </strong>Fast
            </p>
            <p>
              <strong>Price: </strong>$/23KWh
            </p>
            <p>
              <strong>Rating: </strong>8/10
            </p>
            <p>
              <strong>Power: </strong>23KWh
            </p>
            <p>
              <strong>Distance: </strong>24Km
            </p>
          </div>

          {/* Actions */}
          <div className="w-full md:w-1/4 flex flex-col gap-3 items-start md:items-end">
            <div className="flex items-center gap-2 cursor-pointer">
              <IoLocation size={18} />
              <p className="font-bold text-sm">View on map</p>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <FaRegCalendarPlus />
              <p className="font-bold text-sm">Book Session</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
