'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-full flex justify-between items-center py-5 px-6 md:px-12 bg-white dark:bg-black shadow-md fixed top-0 z-50">
      <div className="text-xl font-bold text-indigo-500">Raghu</div>
      <ul className="hidden md:flex space-x-6 font-medium text-gray-800 dark:text-white">
        <li><a href="#about" className="hover:text-indigo-500">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
      </ul>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="ml-4 text-gray-600 dark:text-white"
        title="Toggle Theme"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </nav>
  );
}