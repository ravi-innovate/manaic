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
        name: "tech",
        item: `${siteUrl}tech`,
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
      url: `${siteUrl}tech/${post.slug}`,
    })),
  }
}

export function generateBlogListPageMetadata(): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL!
  const title = "Latest Blog Posts – Smart Ideas, Daily Motivation & Growth"
  const description = "Explore fresh perspectives, simple tips, and inspiring reads on health, mindset, productivity, and life skills. A blog made for curious minds and everyday learners in India."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}tech`,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    }
  }
}
