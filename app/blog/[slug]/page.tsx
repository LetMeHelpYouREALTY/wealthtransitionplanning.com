import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { businessConfig } from 'app/config/business'
import { ArticleSchema, BreadcrumbSchema, SpeakableSchema } from 'app/components/google'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: businessConfig.name,
      locale: 'en_US',
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // 2025: Enhanced schema markup
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.metadata.title, url: `/blog/${post.slug}` },
  ]

  // Estimate word count from content (rough approximation)
  const wordCount = post.content.split(/\s+/).length

  return (
    <section>
      {/* 2025: Enhanced Article Schema */}
      <ArticleSchema
        headline={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        authorName={businessConfig.owner}
        slug={post.slug}
        image={post.metadata.image}
        keywords={post.metadata.keywords || businessConfig.keywords}
        wordCount={wordCount}
      />
      
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Speakable Schema for voice search */}
      <SpeakableSchema
        pageUrl={`/blog/${post.slug}`}
        cssSelectors={['h1', '.prose p:first-of-type', '.prose h2']}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-gray-900">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
