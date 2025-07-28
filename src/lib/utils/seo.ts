import { getPostBySlug } from '@/app/api/apiMethod'
import type { Metadata } from 'next'

export function generateBreadcrumbList(pathSegments: string[], siteUrl: string) {
  const breadcrumbItems = pathSegments.map((segment, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: segment === ''
      ? 'Home'
      : decodeURIComponent(segment).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    item: `${siteUrl.replace(/\/$/, '')}/${pathSegments.slice(0, index + 1).join('/').replace(/^\/+/, '')}`
  }))

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  }
}

export function generateBlogJsonLD({
  siteUrl,
  slug,
  title,
  excerpt,
  coverImage,
  author = "Admin",
  datePublished,
  publisherName = "www.manaic.in",
  logo = "/logo.png"
}: {
  siteUrl: string;
  slug: string;
  title: string;
  excerpt?: string;
  coverImage?: string;
  author?: string;
  datePublished: string;
  publisherName?: string;
  logo?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}tech/${slug}`,
    },
    headline: title,
    description: excerpt || title,
    image: coverImage || undefined,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${logo}`,
      },
    },
    datePublished,
  }
}

export async function generatePageMetadataFromSlug(slug: string): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL!
  const imageBase = process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL!

  const post = await getPostBySlug(slug)
  if (!post) return {}

  const coverImage = post.cover_image ? `${imageBase}${post.cover_image}` : undefined

  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: `${siteUrl}tech/${post.slug}`,
      images: coverImage ? [coverImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
      images: coverImage ? [coverImage] : [],
    }
  }
}