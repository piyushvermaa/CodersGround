import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-3 flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex justify-between items-center w-full md:w-auto mb-2 md:mb-0">
      <Link to="/" className="flex items-center">
  <h1 className="text-3xl font-extrabold select-none flex items-center">
    <span className="text-purple-600">&lt;</span>
    <span className="text-blue-600">/</span>
    <span className="text-yellow-400">&#62;</span>

    <span className="text-white ml-2">Coders Ground</span>
  </h1>
</Link>

        <div className="hidden md:flex md:items-center">
          {/* Add more navigation items as needed */}
        </div>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`md:flex md:space-x-4 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0">
          <li>
            <Link
              to="/compiler"
              className={`text-xl ${
                isMenuOpen ? "md:hidden" : "hidden md:block"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <Button variant="secondary">Compiler</Button>
            </Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
