import { getAllPosts } from '@/app/api/apiMethod'
import React from 'react';
import BlogCard from '../blog/components/BlogCard';
const Categories = async () => {
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {posts && posts.map((blog) =>
                        (<React.Fragment key={blog.id}>
                            <BlogCard blog={blog} />
                        </React.Fragment>)
                        )}

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Categories;
