// components/BlogCard.tsx
import Link from "next/link"
import { Blog } from "@/type/schema"
import ImageSubstitute from "./ImageSubstitute"

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="topic-card rounded-xl p-4 shadow-md hover:shadow-xl transition">
      {blog.cover_image ?
        <img
          src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}${blog.cover_image}`}
          alt={blog.title}
          className="w-full h-auto rounded-lg mb-4"
        /> : <ImageSubstitute text={blog.title} />}
      <h2 className="text-xl font-semibold main-text">{blog.title}</h2>
      <p className="text-sm text-muted-text mt-1">
        {new Date(blog.created_at).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p className="text-secondary-text mt-2">{blog.excerpt?.slice(0, 120)}...</p>
      <Link href={`/blog/${blog.slug}`}>
        <button
          className="mt-4 px-4 py-2 text-sm text-white font-medium bg-main-text rounded-full"
          style={{ backgroundColor: "var(--main-text)" }}
        >
          Read More
        </button>
      </Link>
    </div>
  )
}
