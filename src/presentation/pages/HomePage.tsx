import { GrFavorite } from "react-icons/gr";
import Footer from "./FooterPage";

export default function Home() {
  return (
    <>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-500">
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

      <section className="browse-brand mt-20">
        <h1 className="text-4xl md:text-4xl text-center font-bold">Browse by Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-20">
          <div className="card p-4 rounded-md shadow">
            <img src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG3.png" alt="" className="w-full h-80 object-contain" />
            <h1 className="text-center text-2xl mt-5 font-bold">Telsa</h1>
          </div>
          <div className="card p-4 rounded-md shadow">
            <img src="https://purepng.com/public/uploads/large/purepng.com-ferrari-logoferrariferrari-carsferrari-automobilescarssportferrari-logo-17015274809730h2ic.png" alt="" className="w-full h-80 object-contain" />
            <h1 className="text-center text-2xl mt-5 font-bold">Ferrari</h1>
          </div>
          <div className="card p-4 rounded-md shadow">
            <img src="https://www.pngmart.com/files/22/Porsche-Logo-PNG-HD.png" alt="" className="w-full h-80 object-contain" />
            <h1 className="text-center text-2xl mt-5 font-bold">Porche</h1>
          </div>
          <div className="card p-4 rounded-md shadow">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieup7Re9BebaEtBpyaMxSATZuFXar53HNpvFTkDdwzk9EGUOKNa9B8UB6kbpbe06zAYxtS6lbpmbwZKMmiTAl5Z9mniuVryzWXEgf798BdoaxXmqLX-10Pnc-h8xdbt2k6A2SLvgpmOp_c8dHmYgNsRZcC7XfHcO2pptn2o_zxMz9irj33UOLjUQ/s1438/Lamborghini%20Logo%20-(Koleksilogo.com).png" alt="" className="w-full h-80 object-contain" />
            <h1 className="text-center text-2xl mt-5 font-bold">Lamborghini</h1>
          </div>

        </div>

      </section>

      <section className="mt-20">
        <h1 className="text-4xl text-center font-bold">Popular Cars</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-20">
          <div className="relative card border border-gray-300 rounded-md">
            <img src="https://static0.topspeedimages.com/wordpress/wp-content/uploads/jpg/200603/2006-weineck-cobra-780-cu-3.jpg" alt="" className="w-full h-52 rounded-t-md" />
            <div className="f-icons absolute right-3 top-3">
              <div className="bg-white p-1 rounded-full">
                <GrFavorite color="red" />
              </div>
            </div>
            <div className="car-details p-3">
              <p className="text-lg font-bold fs-3">Ac Cobra 378 MkIU 1965-1967</p>
              <p className="text-sm">Polestar - AC Cobra 378 MKIV 1965-
                1967 Photos, engines &amp; Full
                specs 1965
              </p>
              <p className="text-lg text-blue-600 font-bold ">USD 22,110</p>
              <p className="font-bold text-sm">Condition: <span className="font-normal text-sm">New</span></p>
              <div className="flex justify-center"><button className="py-2 px-20 md:px-12 rounded m-3 bg-blue-600 text-white hover:bg-blue-700 transition">View Details</button></div>
            </div>
          </div>
          <div className="relative card border border-gray-300 rounded-md">
            <img src="https://static0.topspeedimages.com/wordpress/wp-content/uploads/jpg/200603/2006-weineck-cobra-780-cu-3.jpg" alt="" className="w-full h-52 rounded-t-md" />
            <div className="f-icons absolute right-3 top-3">
              <div className="bg-white p-1 rounded-full">
                <GrFavorite color="red" />
              </div>
            </div>
            <div className="car-details p-3">
              <p className="text-lg font-bold fs-3">Ac Cobra 378 MkIU 1965-1967</p>
              <p className="text-sm">Polestar - AC Cobra 378 MKIV 1965-
                1967 Photos, engines &amp; Full
                specs 1965
              </p>
              <p className="text-lg text-blue-600 font-bold ">USD 22,110</p>
              <p className="font-bold text-sm">Condition: <span className="font-normal text-sm">New</span></p>
              <div className="flex justify-center"><button className="py-2 px-20 md:px-12 rounded m-3 bg-blue-600 text-white hover:bg-blue-700 transition">View Details</button></div>
            </div>
          </div>
          <div className="relative card border border-gray-300 rounded-md">
            <img src="https://static0.topspeedimages.com/wordpress/wp-content/uploads/jpg/200603/2006-weineck-cobra-780-cu-3.jpg" alt="" className="w-full h-52 rounded-t-md" />
            <div className="f-icons absolute right-3 top-3">
              <div className="bg-white p-1 rounded-full">
                <GrFavorite color="red" />
              </div>
            </div>
            <div className="car-details p-3">
              <p className="text-lg font-bold fs-3">Ac Cobra 378 MkIU 1965-1967</p>
              <p className="text-sm">Polestar - AC Cobra 378 MKIV 1965-
                1967 Photos, engines &amp; Full
                specs 1965
              </p>
              <p className="text-lg text-blue-600 font-bold ">USD 22,110</p>
              <p className="font-bold text-sm">Condition: <span className="font-normal text-sm">New</span></p>
              <div className="flex justify-center"><button className="py-2 px-20 md:px-12 rounded m-3 bg-blue-600 text-white hover:bg-blue-700 transition">View Details</button></div>
            </div>
          </div>
          <div className="relative card border border-gray-300 rounded-md">
            <img src="https://static0.topspeedimages.com/wordpress/wp-content/uploads/jpg/200603/2006-weineck-cobra-780-cu-3.jpg" alt="" className="w-full h-52 rounded-t-md" />
            <div className="f-icons absolute right-3 top-3">
              <div className="bg-white p-1 rounded-full">
                <GrFavorite color="red" />
              </div>
            </div>
            <div className="car-details p-3">
              <p className="text-lg font-bold fs-3">Ac Cobra 378 MkIU 1965-1967</p>
              <p className="text-sm">Polestar - AC Cobra 378 MKIV 1965-
                1967 Photos, engines &amp; Full
                specs 1965
              </p>
              <p className="text-lg text-blue-600 font-bold ">USD 22,110</p>
              <p className="font-bold text-sm">Condition: <span className="font-normal text-sm">New</span></p>
              <div className="flex justify-center"><button className="py-2 px-20 md:px-12 rounded m-3 bg-blue-600 text-white hover:bg-blue-700 transition">View Details</button></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
}
