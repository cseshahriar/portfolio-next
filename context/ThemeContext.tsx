"use client";

import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
} from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // On mount, initialize theme
    useEffect(() => {
        const stored = localStorage.getItem("theme") as "light" | "dark" | null;
        if (stored) {
        setTheme(stored);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
};
