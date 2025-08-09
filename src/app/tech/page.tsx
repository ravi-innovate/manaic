// File: src/app/tech/page.tsx
import { getBlogsPaginated } from '@/app/api/apiMethod'
import BlogCard from './components/BlogCard'
import Pagination from './components/Pagination'
import React from 'react'
import { generateBlogItemListLD, generateBlogListingBreadcrumb, generateBlogListPageMetadata } from '@/lib/utils/blogListSEO'

const postsPerPage = 6
export async function generateMetadata() {
  // { searchParams }: {
  //   searchParams: Promise<{ page: string }>
  // }
  // const { page } = await searchParams;
  // const currentPage = parseInt(page || '1')
  // const { blogs } = await getBlogsPaginated(currentPage, postsPerPage)

  return generateBlogListPageMetadata()
}

export default async function BlogPage({ searchParams }: {
  searchParams: Promise<{ page: string }>
}) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || '1')
  const { blogs, totalCount } = await getBlogsPaginated(currentPage, postsPerPage)
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL!

  const breadcrumbLD = generateBlogListingBreadcrumb(siteUrl)
  const itemListLD = generateBlogItemListLD(blogs, siteUrl)
  const totalPages = Math.ceil(totalCount / postsPerPage)

  return (<>
    <script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD, null, 4) }}
    />
    <script
      id="itemlist-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLD, null, 4) }}
    />
    <main className="container w-8/9 mt-10">
      <h1 className="text-2xl font-bold md:text-4xl mb-2">Discover What Everyone’s Reading Right Now</h1>
      <p className="mb-6 text-base md:text-lg mb-6 secondary-text">Fresh, addictive, and handpicked blog posts — from smart hacks to bold ideas, start your scroll-worthy journey here.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="blog-list">
        {blogs.map((blog) => (
          <React.Fragment key={blog.id}>
            <BlogCard blog={blog} />
          </React.Fragment>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 &&
        <Pagination currentPage={currentPage} totalPages={totalPages} basePath={`${process.env.NEXT_PUBLIC_APP_URL}tech`} />}
    </main>
  </>
  )
}
