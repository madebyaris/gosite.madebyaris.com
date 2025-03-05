/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import Image from 'next/image'
import Link from 'next/link'
import type { Post, Project } from '@/lib/types'
import * as React from 'react'
import { motion } from 'framer-motion'

interface HomeContentProps {
  type: 'projects' | 'posts'
  initialData: Project[] | Post[]
}

function EmptyState({ type }: { type: 'projects' | 'posts' }) {
  return (
    <div className="mt-6 flex flex-col items-center justify-center rounded-lg border bg-background/50 p-6 text-center">
      <p className="text-base md:text-lg font-medium">No {type} found</p>
      <p className="mt-2 text-xs md:text-sm text-muted-foreground">
        Check back later for new {type}.
      </p>
    </div>
  )
}

export function HomeContent() {
    return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan <span className="text-primary">Optimasi WordPress</span></h2>
            <p className="text-lg text-muted-foreground">
              Kami menawarkan berbagai layanan optimasi WordPress untuk meningkatkan performa website Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="service-card group">
              <div className="service-card-icon bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <h3 className="service-card-title">Speed UP WP</h3>
              <p className="service-card-description">
                Tingkatkan kecepatan loading website WordPress Anda untuk pengalaman pengguna yang lebih baik dan SEO yang optimal.
              </p>
              <Link href="/services/speed-up-wp" className="service-card-link">
                Pelajari Lebih Lanjut
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="service-card group">
              <div className="service-card-icon bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v19"></path>
                  <path d="M5 8h14"></path>
                  <path d="M5 16h14"></path>
                </svg>
              </div>
              <h3 className="service-card-title">Migrasi WP</h3>
              <p className="service-card-description">
                Pindahkan website WordPress Anda ke hosting baru tanpa downtime dan kehilangan data penting.
              </p>
              <Link href="/services/migrasi-wp" className="service-card-link">
                Pelajari Lebih Lanjut
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="service-card group">
              <div className="service-card-icon bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="M6 8h.01"></path>
                  <path d="M10 8h.01"></path>
                  <path d="M14 8h.01"></path>
                  <path d="M18 8h.01"></path>
                  <path d="M8 12h.01"></path>
                  <path d="M12 12h.01"></path>
                  <path d="M16 12h.01"></path>
                  <path d="M7 16h10"></path>
                </svg>
              </div>
              <h3 className="service-card-title">Setup VPS</h3>
              <p className="service-card-description">
                Konfigurasi server VPS Anda untuk performa optimal dengan WordPress dan keamanan tingkat tinggi.
              </p>
              <Link href="/services/setup-vps" className="service-card-link">
                Pelajari Lebih Lanjut
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="service-card group">
              <div className="service-card-icon bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="service-card-title">Maintenance</h3>
              <p className="service-card-description">
                Jaga website WordPress Anda tetap aman, cepat, dan up-to-date dengan layanan pemeliharaan rutin.
              </p>
              <Link href="/services/maintenance" className="service-card-link">
                Pelajari Lebih Lanjut
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mengapa Memilih <span className="text-primary">GOSITE</span>?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Kami adalah tim ahli WordPress yang berdedikasi untuk membantu bisnis Anda tumbuh melalui website yang cepat, aman, dan optimal.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Keahlian Terpercaya</h3>
                    <p className="text-muted-foreground">
                      Lebih dari 5 tahun pengalaman dalam optimasi WordPress dan penanganan berbagai masalah website.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4"></path>
                      <path d="M12 18v4"></path>
                      <path d="M4.93 4.93l2.83 2.83"></path>
                      <path d="M16.24 16.24l2.83 2.83"></path>
                      <path d="M2 12h4"></path>
                      <path d="M18 12h4"></path>
                      <path d="M4.93 19.07l2.83-2.83"></path>
                      <path d="M16.24 7.76l2.83-2.83"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Solusi Cepat</h3>
                    <p className="text-muted-foreground">
                      Kami memberikan solusi cepat dan efektif untuk masalah website WordPress Anda.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Dukungan Pelanggan</h3>
                    <p className="text-muted-foreground">
                      Dukungan 24/7 untuk memastikan website Anda selalu berjalan optimal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="WordPress Expert Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <span className="font-medium">5.0</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;Layanan optimasi WordPress terbaik yang pernah saya gunakan. Website saya sekarang jauh lebih cepat!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata <span className="text-primary">Klien Kami</span></h2>
            <p className="text-lg text-muted-foreground">
              Dengarkan pengalaman klien yang telah menggunakan layanan optimasi WordPress kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-secondary/20 p-8 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">
                &ldquo;Setelah menggunakan layanan Speed UP WP, website saya loading dalam 2 detik. Pengunjung meningkat dan bounce rate menurun drastis!&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                <div>
                  <h4 className="font-medium">Ahmad Rizki</h4>
                  <p className="text-sm text-muted-foreground">Pemilik Toko Online</p>
                </div>
              </div>
      </div>

            {/* Testimonial 2 */}
            <div className="bg-secondary/20 p-8 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">
                &ldquo;Proses migrasi website berjalan lancar tanpa downtime. Tim support sangat responsif dan profesional. Sangat direkomendasikan!&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                <div>
                  <h4 className="font-medium">Siti Nurhaliza</h4>
                  <p className="text-sm text-muted-foreground">Blogger Kuliner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-secondary/20 p-8 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">
                &ldquo;Layanan maintenance bulanan membuat saya tidak perlu khawatir tentang keamanan dan performa website. Sangat worth it!&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                <div>
                  <h4 className="font-medium">Budi Santoso</h4>
                  <p className="text-sm text-muted-foreground">Agensi Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Meningkatkan Performa Website WordPress Anda?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Konsultasikan kebutuhan website WordPress Anda dengan tim ahli kami sekarang
            </p>
            <Link href="/contact" className="button-modern button-modern-primary px-8 py-4 text-lg">
              Konsultasi Gratis
          </Link>
          </div>
    </div>
      </section>
    </>
  )
}
