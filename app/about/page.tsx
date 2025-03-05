import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Code, 
  Server, 
  Cpu, 
  Rocket, 
  Github,
  ExternalLink,
  Heart,
  Zap,
  Award,
  Coffee
} from "lucide-react"
import { ImageResponse } from 'next/og'

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aris Setiawan",
  "jobTitle": "Senior Full Stack Developer",
  "description": "Senior Full Stack Developer with 12+ years of experience in Next.js, React, WordPress, and enterprise web architecture.",
  "url": "https://madebyaris.com",
  "image": "https://madebyaris.com/astro.png",
  "sameAs": [
    "https://www.linkedin.com/in/arissetia/",
    "https://github.com/madebyaris",
    "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "SAB Digital Marketing Agency",
    "url": "https://madebyaris.com"
  },
  "knowsAbout": [
    "Next.js Development",
    "React Development",
    "WordPress Development",
    "Full Stack Development",
    "Web Architecture",
    "Enterprise Solutions",
    "Performance Optimization",
    "Technical Leadership"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full Stack Developer",
    "occupationLocation": {
      "@type": "City",
      "name": "Sidoarjo",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Indonesia"
      }
    },
    "skills": [
      "Next.js",
      "React",
      "TypeScript",
      "WordPress",
      "PHP",
      "MySQL",
      "Node.js",
      "GraphQL"
    ]
  },
  "alumniOf": [
    {
      "@type": "Organization",
      "name": "SAB Digital Marketing Agency",
      "url": "https://madebyaris.com"
    },
    {
      "@type": "Organization",
      "name": "Raja Kreatif Asia",
      "url": "https://rajakreatif.com"
    },
    {
      "@type": "Organization",
      "name": "Hongkiat.com",
      "url": "https://www.hongkiat.com"
    }
  ]
}

// Generate Metadata and Structured Data
export async function generateMetadata(): Promise<Metadata> {
  const ogImage = new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #0062ff, #0062ff99)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '40px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '90%',
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
            Next.js on Low-End VPS
          </h1>
          <p
            style={{
              fontSize: '30px',
              color: 'white',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            A performance experiment by Aris Setiawan
          </p>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginTop: '20px',
            }}
          >
            <div style={{ background: '#ffffff', padding: '10px 20px', borderRadius: '20px', color: '#0062ff', fontWeight: 'bold' }}>
              90+ PageSpeed Score
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
              1GB RAM VPS
            </div>
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
    title: 'About - GOSITE',
    description: 'About Aris Setiawan and the GOSITE project - Testing Next.js performance on low-end VPS servers.',
    keywords: [
      'Next.js Performance',
      'Low-End VPS',
      'WordPress Optimization',
      'Web Performance',
      'Server Optimization',
      'React Server Components',
      'Next.js App Router'
    ],
    openGraph: {
      title: 'About - GOSITE',
      description: 'About Aris Setiawan and the GOSITE project - Testing Next.js performance on low-end VPS servers.',
      type: 'website',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About - GOSITE',
      description: 'About Aris Setiawan and the GOSITE project - Testing Next.js performance on low-end VPS servers.',
      images: [ogImage]
    }
  }
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_70%)]"></div>
          <div className="container-lg relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase mb-2 block">About This Project</span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Next.js on <span className="text-blue-600 dark:text-blue-400">Low-End VPS</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                A performance experiment by Aris Setiawan, testing the capabilities of Next.js on affordable VPS hosting
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://github.com/madebyaris/gosite.madebyaris.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 inline-flex items-center">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Link>
                <Link href="https://gosite.id" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-medium rounded-lg transition-colors duration-200">
                  Visit GOSITE.id
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Project Section */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-800/20">
          <div className="container-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                  The Experiment
                </div>
                <h2 className="text-3xl font-bold">Testing Next.js Performance</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  This website was built to answer a simple question: <span className="font-medium">How well can Next.js perform on affordable, low-end VPS hosting?</span>
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Code className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Modern Framework</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Built with Next.js 14, leveraging App Router, React Server Components, and other cutting-edge features for optimal performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Server className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Budget VPS</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Deployed on a minimal VPS with just 1GB RAM and 1 vCPU to test real-world performance in resource-constrained environments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Optimization Techniques</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Implementing advanced caching strategies, image optimization, code splitting, and server-side rendering to maximize performance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Cpu className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">Results:</span> 90+ PageSpeed score on mobile and desktop despite minimal server resources.
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/nextjs-performance.svg"
                    alt="Next.js Performance"
                    fill
                    className="object-cover p-8"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">90+</div>
                    <span className="text-white font-medium">PageSpeed Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Aris Section */}
        <section className="py-16 md:py-24">
          <div className="container-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/aris-setiawan.jpg"
                    alt="Aris Setiawan"
                    width={600}
                    height={600}
                    className="object-cover w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-3">
                    <Link href="https://github.com/arissetyawan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="https://madebyaris.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Rocket className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                  The Developer
                </div>
                <h2 className="text-3xl font-bold">Aris Setiawan</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Senior Full Stack Developer with over 12 years of experience specializing in Next.js, React, WordPress, and enterprise web architecture.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Founder of MadeByAris</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Running my own freelance business, offering full-stack web development using Next.js, React, and WordPress with a focus on performance optimization.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Coffee className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Passion for Performance</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        I&apos;ve always been passionate about web performance optimization and creating efficient, scalable web applications that deliver excellent user experiences.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-slate-600 dark:text-slate-300">
                    My goal with this experiment was to demonstrate that with proper optimization techniques, even resource-constrained environments can deliver excellent performance for modern web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Acknowledgment Section */}
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-800/20">
          <div className="container-lg">
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
                    <Heart className="h-4 w-4 mr-2" />
                    Special Thanks
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Sponsored by GOSITE.id</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                    This project wouldn&apos;t have been possible without the generous sponsorship from <strong>GOSITE.id</strong>. Their support provided the resources and infrastructure needed to conduct this performance experiment.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 text-emerald-500 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">WordPress optimization services</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 text-emerald-500 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">VPS setup and configuration</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 text-emerald-500 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">WordPress migration services</p>
                    </div>
                  </div>
                  <div>
                    <Link href="https://gosite.id" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 inline-flex items-center">
                      Visit GOSITE.id
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-8">
                  <Link href="https://gosite.id" target="_blank" rel="noopener noreferrer" className="block">
                    <Image 
                      src="/images/gosite-id-logo.svg" 
                      alt="GOSITE.id" 
                      width={200} 
                      height={60}
                      className="h-auto w-full max-w-[200px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}