import Image from "next/image";

const Categories = () => {
    return (
        <div className="container w-8/9 mt-16">
            <div
                className="p-3 bg-l1 py-10"
                style={{
                    borderRadius: "20px",
                    boxShadow: "-2px 2px 10px 2px #0000001a",
                }}
            >
                <div className="text-primary-text text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-main-text">
                        Top Stories to Ignite Your Imagination
                    </h2>
                    <p className="secondary-text break-normal my-3">
                        Discover genres that captivate and inspire, tailored
                        just for you.
                    </p>
                </div>

                <section className="mt-5">
                    <div className="container flex flex-wrap gap-4 justify-around">
                        <div
                            className="topic-card flex flex-col justify-between items-center p-3 bg-background rounded-lg"
                            style={{ borderRadius: "17px", width:"400px" }}
                        >
                            <Image
                                src="/images/blog/CaliforniaFire.webp"
                                height={200}
                                width={400}
                                alt="fire image"
                                className="rounded-lg w-full"
                                style={{ borderRadius: "15px" }}
                            />
                            <h3 className="text-xl font-bold md:text-xl main-text my-3">
                                Inferno in LA: The Wildfires That Redefined
                                Devastation in 2025
                            </h3>

                            <h4 className="secondary-text break-normal">
                                Los Angeles faces an unprecedented crisis as
                                wildfires destroy lives, homes, and history,
                                with damages soaring to $150 billion. The iconic
                                Hollywood Sign now stands as a witness to the
                                flames.
                            </h4>

                            <button
                                className="mt-4 px-6 py-2 text-sm text-white font-semibold text-background bg-main-text rounded-full "
                                style={{ backgroundColor: "var(--main-text)" }}
                            >
                                Read More
                            </button>
                        </div>

                        <div
                            className="topic-card flex flex-col justify-between items-center p-3 bg-background rounded-lg"
                            style={{ borderRadius: "17px", width:"400px" }}
                        >
                            <Image
                                src="/images/blog/CaliforniaFire.webp"
                                height={200}
                                width={400}
                                alt="fire image"
                                className="rounded-lg w-full"
                                style={{ borderRadius: "15px" }}
                            />
                            <h3 className="text-xl font-bold md:text-xl main-text my-3">
                                Inferno in LA: The Wildfires That Redefined
                                Devastation in 2025
                            </h3>

                            <h4 className="secondary-text break-normal">
                                Los Angeles faces an unprecedented crisis as
                                wildfires destroy lives, homes, and history,
                                with damages soaring to $150 billion. The iconic
                                Hollywood Sign now stands as a witness to the
                                flames.
                            </h4>

                            <button
                                className="mt-4 px-6 py-2 text-sm text-white font-semibold text-background bg-main-text rounded-full "
                                style={{ backgroundColor: "var(--main-text)" }}
                            >
                                Read More
                            </button>
                        </div>

                        <div
                            className="topic-card flex flex-col justify-between items-center p-3 bg-background rounded-lg"
                            style={{ borderRadius: "17px", width:"400px" }}
                        >
                            <Image
                                src="/images/blog/CaliforniaFire.webp"
                                height={200}
                                width={400}
                                alt="fire image"
                                className="rounded-lg w-full"
                                style={{ borderRadius: "15px" }}
                            />
                            <h3 className="text-xl font-bold md:text-xl main-text my-3">
                                Inferno in LA: The Wildfires That Redefined
                                Devastation in 2025
                            </h3>

                            <h4 className="secondary-text break-normal">
                                Los Angeles faces an unprecedented crisis as
                                wildfires destroy lives, homes, and history,
                                with damages soaring to $150 billion. The iconic
                                Hollywood Sign now stands as a witness to the
                                flames.
                            </h4>

                            <button
                                className="mt-4 px-6 py-2 text-sm text-white font-semibold text-background bg-main-text rounded-full "
                                style={{ backgroundColor: "var(--main-text)" }}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Categories;
