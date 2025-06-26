import type { Metadata } from 'next'

export function generateBlogListingBreadcrumb(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${siteUrl}blogs`,
      }
    ]
  }
}

export function generateBlogItemListLD(
  posts: { slug: string; title: string; excerpt?: string }[],
  siteUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      description: post.excerpt || post.title,
      url: `${siteUrl}blog/${post.slug}`,
    })),
  }
}

export function generateBlogListPageMetadata(posts: { slug: string; title: string; excerpt?: string }[]): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL!
  const title = "All Blog Posts"
  const description = "Explore the latest insights, tips, and updates from our blog. Stay informed and inspired."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}blogs`,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    }
  }
}
