// components/Header.tsx
import { Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-blue-600">↕️ TradePro</h1>
      <Settings className="text-gray-600 w-5 h-5" />
    </header>
  );
}
