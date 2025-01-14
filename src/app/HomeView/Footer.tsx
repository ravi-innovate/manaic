import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#000] text-white py-8 mt-16 pt-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-around">
                    <div>
                        <Image
                            src={"/images/logo.png"}
                            className=""
                            height={35}
                            width={190}
                            alt="hero_home_image_missing-network-error"
                            style={{ filter: `invert(0)` }}
                        />
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
                                <a href="#" className="hover:text-gray-400">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Contact Us
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="mailto:info@yourwebsite.com"
                                    className="hover:text-gray-400"
                                >
                                    devinpixel@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+1234567890"
                                    className="hover:text-gray-400"
                                >
                                    +91 8529145923
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-2xl hover:text-gray-400"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="text-2xl hover:text-gray-400"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="text-2xl hover:text-gray-400"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                className="text-2xl hover:text-gray-400"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
                    <p>&copy; 2025 manaic.in. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
