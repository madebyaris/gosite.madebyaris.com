/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/70 supports-[backdrop-filter]:bg-background/40 border-b border-slate-200/20 dark:border-slate-700/20 shadow-sm"
    >
      <div className="container-lg flex h-18 items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="relative group">
          <span className="flex items-center">
            <span className="text-primary font-bold text-2xl tracking-tight">GO</span>
            <span className="font-bold text-2xl tracking-tight">SITE</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </span>
        </Link>

        {/* Navigation */}
        <Navigation />
      </div>
    </motion.header>
  )
}
