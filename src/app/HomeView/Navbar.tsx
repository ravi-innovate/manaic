"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoHomeOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleTheme = (): void => {
        const root = document.documentElement;
        const isDarkMode = root.getAttribute("data-theme") === "dark";
        setDarkMode(!isDarkMode);
        root.setAttribute("data-theme", isDarkMode ? "light" : "dark");
    };

    useEffect(() => {
        const root = document.documentElement;
        const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(isDarkPreferred);
        root.setAttribute("data-theme", isDarkPreferred ? "dark" : "light");
    }, []);

    return (
        <nav className="container w-8/9 py-3 flex items-center justify-between relative">
            {/* Logo */}
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}`}>
                <Image
                    src={"/images/logo.png"}
                    height={55}
                    width={140}
                    alt="logo"
                    style={{ filter: `invert(${darkMode ? 0 : 1})`, cursor: "pointer" }}
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex p-1 topic-card text-sm rounded-full items-center justify-between gap-5">
                <Link
                    href={`${process.env.NEXT_PUBLIC_APP_URL}`}
                    className="flex items-center gap-1 p-1 px-3 rounded-full"
                >
                    Home <IoHomeOutline />
                </Link>
                <Link
                    href={`${process.env.NEXT_PUBLIC_APP_URL}blogs`}
                    className="flex items-center gap-1 p-1 px-3 rounded-full"
                >
                    Blogs <RiArticleLine />
                </Link>
                <button
                    onClick={toggleTheme}
                    className="p-1 bg-[--background-1] rounded-full text-lg shadow-md transition-transform hover:scale-105"
                >
                    {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
                </button>
            </div>

            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-2xl focus:outline-none"
            >
                {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full right-4 mt-[-0.75rem] w-48 bg-[--background-1] rounded-lg border border-gray-400 z-50 transition-all duration-300 animate-fade-in flex flex-col p-4 gap-3 text-xs md:hidden">
                    <Link
                        href={`${process.env.NEXT_PUBLIC_APP_URL}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2"
                    >
                        <IoHomeOutline /> Home
                    </Link>
                    <Link
                        href={`${process.env.NEXT_PUBLIC_APP_URL}blogs`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2"
                    >
                        <RiArticleLine /> Blogs
                    </Link>
                    <button
                        onClick={() => {
                            toggleTheme();
                            setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-2"
                    >
                        {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />} {darkMode ? "Light" : "Dark"} Mode
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
