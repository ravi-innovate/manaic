import { getPostBySlug } from '@/app/api/apiMethod'
import { notFound } from 'next/navigation'
import {
    generateBreadcrumbList,
    generateBlogJsonLD,
    generatePageMetadataFromSlug,
    generateFAQPageJsonLD
} from '@/lib/utils/seo'
import Image from 'next/image';
import { FAQItem } from '@/type/schema';
import GoogleTranslate from '@/lib/utils/GoogleTranslate'
// import ReadAloud from '@/lib/utils/ReadAloud';

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
    const breadcrumbJson = generateBreadcrumbList(['', 'tech', blogSlug], siteUrl);
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

    const faqs = JSON.parse(post.faq);
    const faqJson = generateFAQPageJsonLD(faqs);

    return (<>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson, null, 4) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJson, null, 4) }} />
        {faqs && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson, null, 4) }} />}

        <main className="container w-8/9 mt-10">
            <div id="google_translate_article">
                <article translate='yes' >
                    {/* Title */}
                    <GoogleTranslate />
                    {/* <ReadAloud /> */}
                    <h1 className="text-2xl font-bold md:text-4xl mb-2">{post.title}</h1>

                    {/* Meta */}
                    <p className="mb-6 text-sm md:text-base muted-text">
                        Published on {new Date(post.created_at).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </p>

                    {/* Tags */}
                    {post.tags?.length > 0 && (
                        <div className="mb-6 flex flex-wrap gap-3">
                            {post.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-sm md:text-base bg-[var(--background-1)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Cover Image */}
                    {post.cover_image && (
                        <Image
                            height={750}
                            width={1300}
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

                    <section className="blog-content text-base md:text-lg p-3 md:p-5 mt-12 mb-16 rounded-lg bg-[var(--background-2)]">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-list">
                            {faqs && faqs.map((faq: FAQItem, index: number) => (
                                <details key={index} className="faq-item mt-3 py-3 px-5 rounded-lg bg-[var(--background-1)]">
                                    <summary className="faq-question font-bold">
                                        {faq.question}
                                    </summary>
                                    <div className="faq-answer">
                                        <p><b>Ans : </b>{faq.answer}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                </article>
            </div>
        </main >
    </>
    )
}
