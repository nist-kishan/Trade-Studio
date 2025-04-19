"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "📊 Screener", href: "/feature/Screener" },
    { label: "📈 Strategy", href: "/feature/Strategy" },
    { label: "🗂 Portfolio Management", href: "/feature/PortfolioManagement" },
    { label: "🧪 Simulator", href: "/feature/Simulator" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center space-x-6">
        {navItems.map(({ label, href }) => {
          const isActive =
            pathname === href || (pathname === "/" && href === "/feature/simulator");
          return (
            <Link
              key={href}
              href={href}
              className={`font-medium pb-1 ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "cursor-pointer hover:text-purple-600"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-semibold text-gray-500">99M tokens</span>
        <button className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-md hover:bg-purple-200">
          🔔 Alert Subscription
        </button>
      </div>
    </nav>
  );
};

export default Header;
