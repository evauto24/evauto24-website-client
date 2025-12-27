import { NavLink } from "react-router-dom";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "Electric Cars", to: "/cars" },
  { label: "Changing Stations", to: "/stations" },
  { label: "Accessories", to: "/accessories" },
  { label: "Our Garages", to: "/garages" },
  { label: "Favorite", to: "/favorites" },
  { label: "Compare", to: "/compare" },
];

export default function NavbarLayout() {
  return (
    <div className=" bg-black text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-yellow-400">
            EV CAR
          </NavLink>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400"
                    : "text-white/80 hover:text-yellow-400"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white text-black rounded">
              Start Selling
            </button>
            <button className="px-4 py-2 bg-blue-600 rounded">
              Logout
            </button>
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">
              👤
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
