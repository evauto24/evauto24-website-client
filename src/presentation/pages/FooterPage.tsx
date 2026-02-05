import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-32">
        <div className="">
          <h2 className="font-bold text-amber-400">EVcar</h2>
          <p className="text-sm leading-relaxed">
            Drive into the future with electric vehicles, charging stations, and smart EV solutions.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={'#'} className="hover:text-yellow-500">
                Electric Cars
              </Link>
            </li>
            <li>
              <Link to={'#'} className="hover:text-yellow-500">
                Charging Stations
              </Link>
            </li>
            <li>
              <Link to={'#'} className="hover:text-yellow-500">
                Compare
              </Link>
            </li>
            <li>
              <Link to={'#'} className="hover:text-yellow-500">
                Start Selling
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={'#'} className="hover:text-yellow-500">
                Help Center
              </Link>
            </li>
            <li>
              <Link to={'#'} className="hover:text-yellow-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={'#'} className="hover:text-yellow-500">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to={'#'} className="hover:text-yellow-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div>
            <div className="flex items-center gap-2">
              <FaFacebook />
              <p>Facebook</p>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram />
              <p>Instagram</p>
            </div>
            <div className="flex items-center gap-2">
              <FaTwitter />
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 border-t border-gray-500 py-4 text-center text-sm">
        <span className="text-gray-500">© 2026 EV CAR. All rights reserved.</span>
      </div>
    </footer>
  );
}
