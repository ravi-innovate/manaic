import { getPostBySlug } from '@/app/api/apiMethod'
import { notFound } from 'next/navigation'
import {
    generateBreadcrumbList,
    generateBlogJsonLD,
    generatePageMetadataFromSlug
} from '@/lib/utils/seo'

export async function generateMetadata({ params }: {
    params: Promise<{ blogSlug: string }>
}) {
    const { blogSlug } = await params;
    return await generatePageMetadataFromSlug(blogSlug)
}

export default async function BlogPage({ params }: {
    params: Promise<{ blogSlug: string }>
}) {
    const { blogSlug } = await params;
    const post = await getPostBySlug(blogSlug)

    if (!post) return notFound()
    const siteUrl = process.env.NEXT_PUBLIC_APP_URL!;
    const breadcrumbJson = generateBreadcrumbList(['','blogs', blogSlug], siteUrl);
    const blogJson = generateBlogJsonLD({
        siteUrl,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        coverImage: post.cover_image
            ? `${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}${post.cover_image}`
            : undefined,
        datePublished: post.created_at
    })

    return (<>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson, null, 4) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJson, null, 4) }} />

        <main className="container w-8/9 mt-16">
            <article >
                {/* Title */}
                <h1 className="text-4xl font-bold md:text-5xl mb-2">{post.title}</h1>

                {/* Meta */}
                <p className="mb-6 text-sm md:text-base muted-text">
                    Published on {new Date(post.created_at).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>

                {/* Cover Image */}
                {post.cover_image && (
                    <img
                        src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}${post.cover_image}`}
                        alt={post.title}

                        className="w-full h-auto rounded-xl mb-8 shadow-md object-contain"
                    />
                )}

                {/* Content */}
                <div
                    className="text-base md:text-lg secondary-text blog-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {post.tags?.length > 0 && (
                    <div className="mt-10 flex flex-wrap gap-2">
                        {post.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="pr-3 py-1 text-sm md:text-base muted-text"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </article>
        </main></>
    )
}
