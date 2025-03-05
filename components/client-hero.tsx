'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function ClientHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-60 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container-lg relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 items-center">
          {/* Hero Content */}
          <motion.div 
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                WordPress Optimization Specialist
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="text-primary">Optimasi</span> Website WordPress Anda
              </h1>
              <p className="text-xl text-muted-foreground">
                Percayakan optimasi website WordPress Anda kepada kami dan mulai kesuksesan bisnis Anda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="button-modern button-modern-primary"
              >
                Konsultasi Gratis
              </Link>
              <Link 
                href="/services" 
                className="button-modern button-modern-secondary"
              >
                Lihat Layanan
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-background/80 backdrop-blur shadow-sm">
                <span className="text-2xl font-bold text-primary">100+</span>
                <span className="text-sm text-muted-foreground">Klien Puas</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-background/80 backdrop-blur shadow-sm">
                <span className="text-2xl font-bold text-primary">5+</span>
                <span className="text-sm text-muted-foreground">Tahun Pengalaman</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-background/80 backdrop-blur shadow-sm">
                <span className="text-2xl font-bold text-primary">24/7</span>
                <span className="text-sm text-muted-foreground">Dukungan</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/hero-image.jpg"
              alt="WordPress Optimization Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 