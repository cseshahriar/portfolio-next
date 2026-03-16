"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-2 border rounded-md px-2 py-1">

      <button
        onClick={() => setTheme("light")}
        className={`p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
          theme === "light" && "text-yellow-500"
        }`}
      >
        <Sun size={18} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
          theme === "dark" && "text-blue-400"
        }`}
      >
        <Moon size={18} />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
          theme === "system" && "text-green-500"
        }`}
      >
        <Laptop size={18} />
      </button>

    </div>
  );
}