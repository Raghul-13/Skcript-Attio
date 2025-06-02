import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/Attio_Logo.png";
import Button from "../ui/Button";

export default function NavBar() {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Atio Logo" className="h-6 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative group"
              onMouseEnter={() => setIsPlatformOpen(true)}
              onMouseLeave={() => setIsPlatformOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
                Platform
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isPlatformOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isPlatformOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Data Structure & Sources
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Reporting
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Automations
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    AI
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Work & collaboration
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Apps & integrations
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
                Resources
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isResourcesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Help Center
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Academy
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Developer docs
                  </Link>
                  {/* <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Community</Link> */}
                </div>
              )}
            </div>

            <Link
              to="#"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Customers
            </Link>

            <Link
              to="#"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="border border-gray-300 hover:bg-gray-50 transition-colors">
              Talk to Sales
            </Button>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Start for Free
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="pt-2 space-y-1">
              {/* Platform dropdown */}
              <div className="px-3">
                <button
                  className="w-full flex justify-between items-center text-gray-600 hover:text-gray-900 font-medium py-2"
                  onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                >
                  <span>Platform</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isPlatformOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isPlatformOpen && (
                  <div className="pl-4 space-y-2 mt-1">
                    <Link
                      to="#"
                      className="block py-1 text-gray-600 hover:text-gray-900"
                    >
                      Data Structure & Sources
                    </Link>
                    <Link
                      to="#"
                      className="block py-1 text-gray-600 hover:text-gray-900"
                    >
                      Reporting
                    </Link>
                    <Link
                      to="#"
                      className="block py-1 text-gray-600 hover:text-gray-900"
                    >
                      Automations
                    </Link>
                    <Link
                      to="#"
                      className="block py-1 text-gray-600 hover:text-gray-900"
                    >
                      AI
                    </Link>
                    <Link
                      to="#"
                      className="block py-1 text-gray-600 hover:text-gray-900"
                    >
                      Work & collaboration
                    </Link>
                    <Link
                      to="#"
                      className="block py-1 text-gray-600 hover:text-gray-900"
                    >
                      Apps & intergrations
                    </Link>
                  </div>
                )}
              </div>

              <div className="px-3">
                <button
                  className="w-full flex justify-between items-center text-gray-600 hover:text-gray-900 font-medium py-2"
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isResourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isResourcesOpen && (
                  <div className="pl-4 space-y-2 mt-1">
                    <Link
                      to="#"
                      className="block py-1 text-gray-600 hover:text-gray-900"
                    >
                      Help Center
                    </Link>
                    <Link
                      to="#"
                      className="block py-1 text-gray-600 hover:text-gray-900"
                    >
                      Academy
                    </Link>
                    <Link
                      to="#"
                      className="block py-1 text-gray-600 hover:text-gray-900"
                    >
                      Developer docs
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Customers
              </Link>

              <Link
                to="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Pricing
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
