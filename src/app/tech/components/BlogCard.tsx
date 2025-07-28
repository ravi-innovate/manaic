// components/BlogCard.tsx
import Link from "next/link"
import { Blog } from "@/type/schema"
import ImageSubstitute from "./ImageSubstitute"
import LikeButton from "./LikeButton"
import Image from "next/image"

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="topic-card flex flex-col rounded-xl p-4 shadow-md hover:shadow-xl transition relative">
      {blog.cover_image ?
        <Image
          height={270}
          width={400}
          src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}${blog.cover_image}`}
          alt={blog.title}
          className="w-full h-auto rounded-lg mb-4"
        /> : <ImageSubstitute text={blog.title} />}
      <Link href={`/tech/${blog.slug}`} aria-label={`Go to ${blog.title}`}>
        <h2 className="text-xl font-semibold main-text">{blog.title}</h2>
      </Link>
      <p className="text-sm text-muted-text mt-1">
        {new Date(blog.created_at).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p className="text-secondary-text mt-2 mb-2">{blog.excerpt?.slice(0, 120)}...</p>

      <div className="mt-auto w-full flex justify-between items-center">
        <Link href={`/tech/${blog.slug}`} aria-label={`Go to ${blog.title}`}>
          <button
            className="px-4 py-2 text-sm text-white font-medium bg-main-text rounded-full"
            style={{ backgroundColor: "var(--main-text)" }}
          >
            Read More
          </button>
        </Link>
        <LikeButton postId={blog.id} initialLikes={blog.likes} />
      </div>
    </div>
  )
}
