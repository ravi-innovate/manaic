// File: src/app/blog/page.tsx
import { getBlogsPaginated } from '@/app/api/apiMethod'
import { Metadata } from 'next'
import BlogCard from './components/BlogCard'
import Pagination from './components/Pagination'
import React from 'react'
export const metadata: Metadata = {
  title: 'Explore Top Blog Posts | Maniac Blog',
  description: 'Browse our latest blogs covering technology, lifestyle, fitness, and more. Stay informed and inspired.',
  alternates: {
    canonical: '/blog',
  },
}

export default async function BlogPage({ searchParams }: {
  searchParams: Promise<{ page: string }>
}) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || '1')
  const postsPerPage = 6
  const { blogs, totalCount } = await getBlogsPaginated(currentPage, postsPerPage)

  const totalPages = Math.ceil(totalCount / postsPerPage)

  return (
    <main className="container w-8/9 mt-16">
      <h1 className="text-2xl font-bold md:text-4xl mb-2">Discover What Everyone’s Reading Right Now</h1>
      <h1 className="mb-6 text-base md:text-lg mb-6 secondary-text">Fresh, addictive, and handpicked blog posts — from smart hacks to bold ideas, start your scroll-worthy journey here.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="blog-list">
        {blogs.map((blog) => (
          <React.Fragment key={blog.id}>
            <BlogCard blog={blog} />
          </React.Fragment>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 &&
        <Pagination currentPage={currentPage} totalPages={totalPages} basePath={`${process.env.NEXT_PUBLIC_APP_URL}blog`} />}
    </main>
  )
}
