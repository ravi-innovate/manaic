import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <>
            <Navbar />
            <div className="container w-8/9 flex items-center justify-between mt-1">
                <div className="flex flex-col gap-3">
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
                </div>
                <div>
                    <Image
                        src={"/images/home-hero.png"}
                        className="me-20"
                        height={700}
                        width={500}
                        alt="hero_home_image_missing-network-error"
                    />
                </div>
            </div>
            <div className="container w-8/9 flex items-center justify-between ">
                <p className="text-6xl p-10 my-20 mx-auto font-bold coming-soon rounded-3xl"> We Will Comming Soon </p>
            </div>
        </>
    );
};

export default Hero;
