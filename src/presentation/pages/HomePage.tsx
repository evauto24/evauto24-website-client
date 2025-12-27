export default function Home() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Drive the Future with Us
        </h1>
        <p className="text-white/80 mb-10">
          Find your perfect electric car or charging solution today
        </p>

        <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center shadow-lg">
          <select className="w-full md:w-1/5 border px-3 py-2 rounded text-black">
            <option>Electric Cars</option>
            <option>Charging Stations</option>
          </select>

          <input
            className="w-full md:w-1/5 border px-3 py-2 rounded text-black"
            placeholder="Location"
          />

          <input
            className="w-full md:w-1/5 border px-3 py-2 rounded text-black"
            placeholder="Brand or Model"
          />

          <input
            className="w-full md:w-1/5 border px-3 py-2 rounded text-black"
            placeholder="Features"
          />

          <button className="w-full md:w-auto px-6 py-2 rounded bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
