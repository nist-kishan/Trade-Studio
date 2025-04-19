"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { SiTradingview } from "react-icons/si";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname(); 

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "/feature", label: "Features" },
    { href: "/documentations", label: "Documentations" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="bg-white text-black border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold inline-flex items-center">
              <SiTradingview />
              <p className="mx-2">TradingStudio</p>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-10 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`pb-1 transition-all ${
                  pathname === link.href
                    ? "border-b-4 border-blue-500 text-blue-700"
                    : "text-gray-700 hover:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={handleAuthToggle}
              className={`${
                isLoggedIn
                  ? "bg-red-800 hover:bg-red-700"
                  : "bg-indigo-800 hover:bg-indigo-700"
              } text-white py-2 px-6 rounded-xl transition-all`}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-5 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-lg transition-all ${
                  pathname === link.href
                    ? "border-b-2 border-blue-500 text-blue-700"
                    : "text-gray-700 hover:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={handleAuthToggle}
              className={`w-full text-center ${
                isLoggedIn
                  ? "bg-red-800 hover:bg-red-700"
                  : "bg-purple-800 hover:bg-purple-700"
              } text-white py-2 px-6 rounded-xl transition-all`}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
