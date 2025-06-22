"use client"
import { useEffect, useState, useRef } from "react"
import BlogCard from "./BlogCard"

type Blog = {
  id: number
  title: string
  slug: string
  created_at: string
  excerpt?: string
  cover_image?: string
}


export default function LoadMore() {
  const [page, setPage] = useState<number>(2)
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const observer = useRef<IntersectionObserver | null>(null)

  const lastElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !loading) {
        fetchMoreBlogs()
      }
    })

    if (lastElement.current) {
      observer.current.observe(lastElement.current)
    }
  }, [lastElement.current])

  const fetchMoreBlogs = async () => {
    setLoading(true)
    const res = await fetch(`/api/blogs?page=${page}`)
    const data = await res.json()
    setBlogs(prev => [...prev, ...data])
    setPage(prev => prev + 1)
    setLoading(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div ref={lastElement} className="h-12 mt-6 text-center text-muted-text">
        {loading ? "Loading..." : "Scroll to load more"}
      </div>
    </>
  )
}
