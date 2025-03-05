'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'

interface NavigationItem {
  href: string
  label: string
  children?: NavigationItem[]
}

const navigationItems: NavigationItem[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary relative',
              pathname === item.href
                ? 'text-primary font-semibold'
                : 'text-foreground/80'
            )}
          >
            {item.label}
            {pathname === item.href && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
            )}
          </Link>
        ))}
        <Link
          href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
          className="button-modern button-modern-primary text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me
        </Link>
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -mr-2 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-50 bg-background border-t"
          >
            <div className="container-lg py-8 flex flex-col space-y-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-xl font-medium py-2 transition-colors',
                    pathname === item.href
                      ? 'text-primary font-semibold'
                      : 'text-foreground/80'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
                onClick={() => setIsOpen(false)}
                className="button-modern button-modern-primary text-center mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
