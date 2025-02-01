import type { Metadata } from 'next'
import { Code2, Layout, Server, Rocket, Zap, FileCode } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - Aris Setiawan',
  description: 'Professional web development services including Next.js, PHP, and WordPress development with focus on performance and modern solutions',
}

const services = [
  {
    title: 'Next.js Development',
    description: 'Modern web applications built with Next.js for optimal performance, SEO, and exceptional user experience.',
    icon: <Code2 className="w-6 h-6" />,
    href: '/services/nextjs-development',
    features: ['Server Components', 'Static Generation', 'Edge Runtime', 'API Routes'],
  },
  {
    title: 'PHP Development',
    description: 'Custom PHP applications and solutions built with modern practices and robust architecture.',
    icon: <Server className="w-6 h-6" />,
    href: '/services/php-development',
    features: ['Custom Applications', 'API Development', 'Database Design', 'Security Focus'],
  },
  {
    title: 'WordPress Development',
    description: 'Professional WordPress development including custom themes, plugins, and headless solutions.',
    icon: <Layout className="w-6 h-6" />,
    href: '/services/wordpress',
    features: ['Custom Themes', 'Plugin Development', 'Headless WordPress', 'Performance'],
  },
]

const wordPressServices = [
  {
    title: 'Custom Theme Development',
    description: 'Pixel-perfect WordPress themes that capture your unique style and meet your specific requirements.',
    icon: <Layout className="w-6 h-6" />,
    href: '/services/wordpress/theme-development',
    benefits: ['Unique Design', 'Mobile-First', 'SEO Optimized', 'Fast Loading'],
  },
  {
    title: 'Plugin Development',
    description: 'Custom WordPress plugins that add exactly the features you need, built with security and performance in mind.',
    icon: <FileCode className="w-6 h-6" />,
    href: '/services/wordpress/plugin-development',
    benefits: ['Custom Features', 'Integration Ready', 'Scalable', 'Well-Maintained'],
  },
  {
    title: 'Headless WordPress',
    description: 'Modern headless WordPress solutions with Next.js frontends, combining the best of both worlds.',
    icon: <Rocket className="w-6 h-6" />,
    href: '/services/wordpress/headless-development',
    benefits: ['Modern Stack', 'Better Performance', 'API-Driven', 'Flexible'],
  },
  {
    title: 'WordPress Optimization',
    description: 'Comprehensive WordPress optimization for peak performance, security, and user experience.',
    icon: <Zap className="w-6 h-6" />,
    href: '/services/wordpress/optimization',
    benefits: ['Speed Optimization', 'Security Hardening', 'CDN Setup', 'Caching'],
  },
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-transparent to-zinc-100/50 dark:from-zinc-900 dark:via-transparent dark:to-zinc-900/50" />
      </div>

      <div className="container relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-12">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Professional Web Development Services
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                Expert development services focused on modern technologies and best practices. From blazing-fast Next.js applications to powerful WordPress solutions.
              </p>
            </div>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <Link 
                  key={service.title} 
                  href={service.href}
                  className="group animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="h-full p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-700">
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 transition-transform group-hover:scale-110 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 group-hover:text-zinc-50 dark:group-hover:text-zinc-900">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{service.title}</h2>
                      <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span key={feature} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* WordPress Services Section */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                WordPress Development Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {wordPressServices.map((service, index) => (
                  <Link 
                    key={service.title} 
                    href={service.href}
                    className="group animate-in fade-in slide-in-from-bottom duration-1000"
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="h-full p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-700">
                      <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 transition-transform group-hover:scale-110 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 group-hover:text-zinc-50 dark:group-hover:text-zinc-900">
                          {service.icon}
                        </div>
                        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{service.title}</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.benefits.map((benefit) => (
                            <span key={benefit} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}