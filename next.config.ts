import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default nextConfig;
