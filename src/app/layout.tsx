import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./HomeView/Navbar";
import { gtmNoScript, gtmScript } from '@/lib/utils/Gtag'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Manaic - Articles for the Creative Maniac Mind",
    description: "Manaic is your home for uniquely crafted blogs on tech, life, and everything in between.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>        
                <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <noscript dangerouslySetInnerHTML={{ __html: gtmNoScript }} />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
