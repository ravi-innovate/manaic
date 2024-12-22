"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleTheme = (): void => {
        const root = document.documentElement;
        const isDarkMode = root.getAttribute("data-theme") === "dark";
        setDarkMode(isDarkMode);
        if (isDarkMode) {
            root.setAttribute("data-theme", "light");
        } else {
            root.setAttribute("data-theme", "dark");
        }
    };

    useEffect(() => {
        const root = document.documentElement;
        const isDarkPreferred = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        setDarkMode(isDarkPreferred);
        if (isDarkPreferred) {
            root.setAttribute("data-theme", "dark");
        } else {
            root.setAttribute("data-theme", "light");
        }
    }, []);

    return (
        <div className="container w-8/9 py-3 flex items-center justify-between">
            <Image
                src={"/images/logo.png"}
                className="me-20 rounded-full"
                height={40}
                width={200}
                alt="hero_home_image_missing-network-error"
                style={{ filter: `invert(${darkMode ? 1 : 0})` }}
            />
            <button
                onClick={toggleTheme}
                className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md transition-transform hover:scale-105"
            >
                {darkMode ? (
                    <span className="text-yellow-400" aria-label="Dark Mode">
                        🌙
                    </span>
                ) : (
                    <span className="text-gray-800" aria-label="Light Mode">
                        ☀️
                    </span>
                )}
            </button>
        </div>
    );
};

export default Navbar;
