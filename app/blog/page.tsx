/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import { getPosts, getAllTags } from '@/lib/wordpress'
import type { Post, Tag, PostsResponse } from '@/lib/types'
import { ImageResponse } from 'next/og'
import { Suspense } from 'react'
import { BlogContent } from '@/components/blog-content'
import { Button } from '@/components/ui/button'

export const revalidate = 3600

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Technical Insights & Development Resources",
  "description": "In-depth articles on modern web technologies, performance optimization, and development best practices from a senior full-stack perspective.",
  "url": "https://madebyaris.com/blog",
  "author": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "Senior Full Stack Developer",
    "url": "https://madebyaris.com",
    "sameAs": [
      "https://www.linkedin.com/in/arissetia/",
      "https://github.com/arissetyawan",
      "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "MadeByAris",
    "url": "https://madebyaris.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://madebyaris.com/logo.png"
    }
  },
  "keywords": [
    "Web Development",
    "Next.js",
    "React",
    "WordPress",
    "TypeScript",
    "JavaScript",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Web Performance"
  ],
  "about": {
    "@type": "Thing",
    "name": "Technical Web Development Blog",
    "description": "Advanced technical resources for modern web development, performance optimization, and enterprise-grade solutions."
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "MadeByAris",
    "url": "https://madebyaris.com"
  },
  "inLanguage": "en-US",
  "copyrightYear": new Date().getFullYear(),
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/"
}

// Generate OG Image
export async function generateMetadata(): Promise<Metadata> {
  const ogImage = new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Technical Insights & Resources
        </h1>
        <p
          style={{
            fontSize: '30px',
            color: '#888888',
            marginBottom: '20px',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Advanced development strategies and solutions for modern web applications
        </p>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#007acc', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Next.js
          </div>
          <div style={{ background: '#61dafb', padding: '10px 20px', borderRadius: '20px', color: 'black' }}>
            React
          </div>
          <div style={{ background: '#21759b', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            WordPress
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )

  return {
    title: 'Technical Insights & Development Resources | MadeByAris',
    description: 'Advanced development strategies and solutions for modern web applications. Practical insights from enterprise-level experience in Next.js, React, and WordPress.',
    keywords: [
      'Advanced Web Development',
      'Next.js Architecture',
      'React Performance',
      'WordPress Integration',
      'TypeScript Solutions',
      'JavaScript Optimization',
      'Full Stack Systems',
      'Web Performance Tuning',
      'Enterprise Architecture',
      'Development Best Practices'
    ],
    openGraph: {
      title: 'Technical Insights & Development Resources | MadeByAris',
      description: 'Advanced development strategies and solutions for modern web applications.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Technical Insights & Development Resources | MadeByAris',
      description: 'Advanced development strategies and solutions for modern web applications.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/blog'
    }
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let postsData: PostsResponse = { posts: [], pagination: { total: 0, totalPages: 0, currentPage: 1, perPage: 12 } }
  let popularTags: Tag[] = []
  
  // Await searchParams before accessing its properties
  const resolvedSearchParams = await searchParams;
  
  // Extract search and page parameters safely
  const pageParam = resolvedSearchParams.page;
  const pageStr = typeof pageParam === 'string' 
    ? pageParam 
    : Array.isArray(pageParam) 
      ? pageParam[0] 
      : '1';
  
  const page = parseInt(pageStr, 10) || 1;
  
  const searchParam = resolvedSearchParams.search;
  const searchStr = typeof searchParam === 'string'
    ? searchParam
    : Array.isArray(searchParam)
      ? searchParam[0]
      : '';
  
  try {
    // Fetch posts and popular tags in parallel
    const [fetchedPostsData, tagsData] = await Promise.all([
      getPosts({ 
        per_page: 12, 
        page,
        search: searchStr
      }),
      getAllTags(6) // Get top 6 most popular tags
    ]);
    
    postsData = fetchedPostsData;
    popularTags = tagsData;
    
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }

  // Function to generate structured data
  function generateStructuredData() {
    // Combine both schemas into a single object with @graph
    const combinedSchema = {
      "@context": "https://schema.org",
      "@graph": [
        structuredData,
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": postsData.posts.map((post, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "BlogPosting",
              "headline": post.title.rendered,
              "description": post.excerpt.rendered.replace(/<[^>]*>/g, ''),
              "url": `https://madebyaris.com/blog/${post.slug}`,
              "author": {
                "@type": "Person",
                "name": "Aris Setiawan",
                "url": "https://madebyaris.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "MadeByAris",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://madebyaris.com/logo.png"
                }
              },
              "datePublished": post.date,
              "dateModified": post.modified,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://madebyaris.com/blog/${post.slug}`
              },
              "keywords": post.tags?.map((tag) => typeof tag === 'object' ? tag.name : '').filter(Boolean).join(", ") || "",
              "articleSection": post.categories?.map((cat) => typeof cat === 'object' ? cat.name : '').filter(Boolean).join(", ") || "Web Development"
            }
          })),
          "numberOfItems": postsData.posts.length
        }
      ]
    }

    return {
      __html: JSON.stringify(combinedSchema)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData()}
      />
      
      {/* Hero Section with improved design and animated gradient */}
      <section className="relative py-8 md:py-10 overflow-hidden animated-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,119,198,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(120,119,198,0.1),transparent_70%)]"></div>
        
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-3 backdrop-blur-sm">
              Technical Resources
            </div>
            
            {/* Critical LCP element - enhanced heading */}
            <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter lg:text-4xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
              Advanced Development Insights
            </h1>
            
            <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-2xl mx-auto">
              Practical solutions and strategies for building high-performance, scalable web applications with modern technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <div className="px-3 py-1 text-xs rounded-full bg-[#007acc] text-white">
                Next.js
              </div>
              <div className="px-3 py-1 text-xs rounded-full bg-[#61dafb] text-black">
                React
              </div>
              <div className="px-3 py-1 text-xs rounded-full bg-[#21759b] text-white">
                WordPress
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Section with improved layout */}
      <section className="py-4 md:py-6">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <Suspense fallback={
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[300px] animate-pulse rounded-xl bg-muted" />
              ))}
            </div>
          }>
            <BlogContent 
              initialPosts={postsData.posts} 
              pagination={postsData.pagination}
              initialSearch={searchStr}
            />
          </Suspense>
        </div>
      </section>
    </>
  )
}
