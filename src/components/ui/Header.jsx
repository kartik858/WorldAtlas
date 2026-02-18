import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle =
    "relative px-3 py-2 text-sm md:text-base font-medium text-gray-300 transition duration-300 hover:text-cyan-400";

  const activeStyle =
    "text-cyan-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            WorldAtlas
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/country"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Country
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-gray-300 text-2xl cursor-pointer">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenuAlt3 onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-6">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              About
            </NavLink>
            <NavLink
              to="/country"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Country
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
