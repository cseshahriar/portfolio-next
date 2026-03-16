"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded focus:outline-none transition"
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}