import Image from "next/image";
import { getAllPosts } from '@/app/api/apiMethod'
import Link from "next/link";
const Categories = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
    const posts = await getAllPosts();
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
                        {posts && posts.map((value, index) =>
                        (<div
                            key={index}
                            className="topic-card flex flex-col justify-between items-center p-3 bg-background rounded-lg"
                            style={{ borderRadius: "17px", width: "400px" }}
                        >
                            {value.cover_image && <img
                                src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}${value.cover_image}`}
                                height={200}
                                width={400}
                                alt="fire image"
                                className="rounded-lg w-full"
                                style={{ borderRadius: "15px" }}
                            />}
                            <h3 className="text-xl font-bold md:text-xl main-text my-3">
                                {value.title}
                            </h3>

                            <h4 className="secondary-text break-normal">
                                {value.excerpt}
                            </h4>
                            <Link href={`${baseUrl}blog/${value.slug}`}>
                                <button
                                    className="mt-4 px-6 py-2 text-sm text-white font-semibold rounded-full"
                                    style={{ backgroundColor: 'var(--main-text)' }}
                                >
                                    Read More
                                </button>
                            </Link>
                        </div>)
                        )}

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Categories;
