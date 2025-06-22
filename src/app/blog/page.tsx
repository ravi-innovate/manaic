// app/blog/page.tsx
import { getBlogsPaginated } from "@/app/api/apiMethod"
import BlogCard from "./components/BlogCard"
import LoadMore from "./components/LoadMore"
export const revalidate = 60 // for ISR

export default async function BlogPage() {
  const blogs = await getBlogsPaginated(1)

  return (
    <section className="container w-8/9 mt-16">
      <h1 className="text-2xl font-bold md:text-4xl mb-2">Discover What Everyone’s Reading Right Now</h1>
      <h1 className="mb-6 text-base md:text-lg mb-6 secondary-text">Fresh, addictive, and handpicked blog posts — from smart hacks to bold ideas, start your scroll-worthy journey here.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="blog-list">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <LoadMore />
    </section>
  )
}
