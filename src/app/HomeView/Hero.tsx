import Image from "next/image";
import Link from "next/link";
// import Navbar from "./Navbar";

const Hero = () => {
    return (
        <>

            <div className="container w-8/9 flex items-center justify-between mt-1">
                <div className="flex flex-col gap-5 text-center md:text-left">
                    <span className="mt-4 py-2 secondary-text break-normal rounded-full">We didn’t misspell it. We redefined it. 🧠⚡</span>
                    <h1 className="text-5xl font-bold md:text-6xl">
                        Discover What Matters
                    </h1>
                    <h2 className="text-3xl font-bold md:text-3xl main-text">
                        Ignite Your Passion for Discovery
                    </h2>
                    <p className="mt-4 secondary-text break-normal">
                        Dive into a variety of exciting topics, including
                        technology, travel, lifestyle, and much more. Explore
                        new ideas, gain fresh perspectives, and discover
                        inspiration that can help you learn, grow, and stay
                        informed!
                    </p>
                    <Link href={`${process.env.NEXT_PUBLIC_APP_URL}tech`} aria-label="Go to tech blogs">
                        <button className="mt-4 px-4 py-2 text-sm text-white font-medium bg-main-text rounded-full"
                            style={{ backgroundColor: "var(--main-text)" }}>Explore Blogs</button>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <Image
                        src={"/images/home-hero-new.png"}
                        className="me-20"
                        height={650}
                        width={300}
                        alt="hero_home_image_missing-network-error"
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
