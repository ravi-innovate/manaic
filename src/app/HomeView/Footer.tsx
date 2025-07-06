import Image from "next/image";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-[#000] text-white py-8 mt-16 pt-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <Link href={`${process.env.NEXT_PUBLIC_APP_URL}`} >
                            <Image
                                src={"/images/logo.png"}
                                className=""
                                height={35}
                                width={190}
                                alt="hero_home_image_missing-network-error"
                                style={{ filter: `invert(0)`,cursor:"pointer"  }}
                            />
                        </Link>
                        <p className="mt-5 text-sm opacity-70">
                            Explore exciting topics, discover new perspectives,
                            and stay informed!
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href={`${process.env.NEXT_PUBLIC_APP_URL}`} style={{cursor:"pointer"}} >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={`${process.env.NEXT_PUBLIC_APP_URL}blogs`} style={{cursor:"pointer"}} >
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Contact Us
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="mailto:devinpixel@gmail.com"
                                    className="hover:text-gray-400"
                                    style={{cursor:"pointer"}}
                                >
                                    devinpixel@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <Link
                                href={`${process.env.NEXT_PUBLIC_INSTA_URL}`}
                                style={{stroke:"white",fontSize:"25px"}}
                            >
                                <FiInstagram />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
                    <p>&copy; 2025 manaic.in - All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
