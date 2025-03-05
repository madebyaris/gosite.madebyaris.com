import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Zap, 
  Server, 
  Shield, 
  Clock, 
  CheckCircle2 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Layanan - GOSITE',
  description: 'Layanan optimasi website WordPress untuk meningkatkan performa, kecepatan, dan keamanan website Anda.',
}

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-slate-900">
      {/* Services Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="container-lg relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase mb-2 block">Layanan Kami</span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Solusi <span className="text-blue-600 dark:text-blue-400">WordPress</span> Terbaik
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Kami menawarkan layanan komprehensif untuk meningkatkan performa website WordPress Anda
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-800/20">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                <Image 
                  src="/images/speed-up-wp.svg" 
                  alt="Optimasi WordPress"
                  fill
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold">Speed UP WP</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Tingkatkan kecepatan loading website WordPress Anda untuk pengalaman pengguna yang lebih baik dan SEO yang optimal.
                </p>
                <Link href="/services/speed-up-wp" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-300"></div>
                <Image 
                  src="/images/migrasi-wp.svg" 
                  alt="Migrasi WordPress"
                  fill
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mr-3">
                    <Server className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold">Migrasi WP</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Pindahkan website WordPress Anda ke hosting baru tanpa downtime dan kehilangan data penting.
                </p>
                <Link href="/services/migrasi-wp" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium text-sm hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors duration-300"></div>
                <Image 
                  src="/images/setup-vps.svg" 
                  alt="Setup & Optimasi VPS"
                  fill
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mr-3">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold">Setup VPS</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Konfigurasi server VPS Anda untuk performa optimal dengan WordPress dan keamanan tingkat tinggi.
                </p>
                <Link href="/services/setup-vps" className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium text-sm hover:text-amber-700 dark:hover:text-amber-300 transition-colors">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors duration-300"></div>
                <Image 
                  src="/images/maintenance.svg" 
                  alt="Maintenance VPS & WordPress"
                  fill
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold">Maintenance</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Siap melayani perbaikan dan perawatan pada VPS dan website Anda jika terjadi issue.
                </p>
                <Link href="/services/maintenance" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium text-sm hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          {/* Speed UP WP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <Image
                src="/images/speed-up-wp.svg"
                alt="Speed UP WordPress Service"
                fill
                className="object-cover p-8"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                Layanan Unggulan
              </div>
              <h2 className="text-3xl font-bold">Speed UP WordPress</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Tingkatkan kecepatan loading website WordPress Anda untuk pengalaman pengguna yang lebih baik dan SEO yang optimal.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-blue-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Optimasi database WordPress</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-blue-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Konfigurasi caching tingkat lanjut</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-blue-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Optimasi gambar dan aset</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-blue-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Minifikasi CSS, JavaScript, dan HTML</p>
                </div>
              </div>
              
              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold">Rp 1.500.000</span>
                  <span className="text-slate-500 dark:text-slate-400">/ website</span>
                </div>
                <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 inline-flex items-center">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Migrasi WP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <Image
                src="/images/migrasi-wp.svg"
                alt="WordPress Migration Service"
                fill
                className="object-cover p-8"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent"></div>
            </div>
            
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                Tanpa Downtime
              </div>
              <h2 className="text-3xl font-bold">Migrasi WordPress</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Pindahkan website WordPress Anda ke hosting baru tanpa downtime dan kehilangan data penting.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-emerald-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Backup lengkap website</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-emerald-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Migrasi tanpa downtime</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-emerald-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Konfigurasi server baru</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-emerald-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Pengujian menyeluruh</p>
                </div>
              </div>
              
              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold">Rp 1.200.000</span>
                  <span className="text-slate-500 dark:text-slate-400">/ website</span>
                </div>
                <Link href="/contact" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200 inline-flex items-center">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Setup VPS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <Image
                src="/images/setup-vps.svg"
                alt="VPS Setup Service"
                fill
                className="object-cover p-8"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                Performa Tinggi
              </div>
              <h2 className="text-3xl font-bold">Setup VPS</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Konfigurasi server VPS Anda untuk performa optimal dengan WordPress dan keamanan tingkat tinggi.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-amber-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Instalasi LEMP stack (Linux, Nginx, MySQL, PHP)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-amber-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Konfigurasi keamanan server</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-amber-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Instalasi SSL dan optimasi Nginx</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-amber-500 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Setup backup otomatis</p>
                </div>
              </div>
              
              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold">Rp 2.000.000</span>
                  <span className="text-slate-500 dark:text-slate-400">/ server</span>
                </div>
                <Link href="/contact" className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200 inline-flex items-center">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-800/20">
        <div className="container-lg">
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Butuh Bantuan Untuk Website Anda?</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8 text-base md:text-lg">
                  Konsultasikan kebutuhan website WordPress Anda dengan tim ahli kami. Kami siap memberikan solusi terbaik untuk meningkatkan performa website Anda.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 inline-flex items-center">
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="https://wa.me/yourphonenumber" className="px-6 py-3 bg-white hover:bg-slate-50 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 font-medium rounded-lg transition-colors duration-200">
                    WhatsApp
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 bg-blue-600 dark:bg-blue-700 flex items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 