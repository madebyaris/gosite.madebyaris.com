import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import {
  ArrowRight,
  Zap,
  BarChart,
  Shield,
  Globe,
  Database,
  Settings,
  LineChart
} from 'lucide-react'

// Metadata
export const metadata: Metadata = {
  title: 'GOSITE - Layanan Optimasi WordPress Performance',
  description: 'Solusi terbaik untuk optimasi performa WordPress, migrasi website, dan setup VPS untuk website cepat dan SEO-friendly.',
  openGraph: {
    title: 'GOSITE - Layanan Optimasi WordPress Performance',
    description: 'Solusi terbaik untuk optimasi performa WordPress, migrasi website, dan setup VPS untuk website cepat dan SEO-friendly.',
    type: 'website',
    locale: 'id_ID',
  }
}

// Revalidation
export const revalidate = 86400 // 24 hours

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 pt-12 pb-12 lg:pt-20 lg:pb-16">
        {/* Clean, minimal design without decorations */}
        <div className="container-lg relative">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              WordPress Optimization Experts
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-[800px]">
              Optimasi Website <span className="text-blue-600 dark:text-blue-400">WordPress</span> Anda Sekarang!!
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-[800px] mb-6">
              Mengoptimasi website WordPress dapat menentukan keberhasilan atas usaha Anda. Mengoptimasi loading website merupakan salah satu point penting dalam SEO.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                Hubungi
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link href="/services" className="px-6 py-3 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-medium rounded-lg transition-colors duration-200">
                Layanan
              </Link>
            </div>
            
            {/* Hero Features - Clean, minimal design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px]">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <Zap className="h-4 w-4 text-blue-500 mr-2" />
                  <h3 className="font-semibold text-sm">Kecepatan Loading</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Tingkatkan kecepatan loading website hingga 300% dengan teknik optimasi lanjutan
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <LineChart className="h-4 w-4 text-blue-500 mr-2" />
                  <h3 className="font-semibold text-sm">SEO Performance</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Performa website yang lebih baik berdampak positif pada ranking SEO Anda
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <Shield className="h-4 w-4 text-blue-500 mr-2" />
                  <h3 className="font-semibold text-sm">Keamanan Tinggi</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Implementasi keamanan terbaik untuk melindungi website WordPress Anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-10 md:py-16 bg-slate-50 dark:bg-slate-800/20">
        <div className="container-lg">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase mb-2 block">Layanan Kami</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Solusi WordPress Terbaik</h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-[700px] mx-auto">
              Gosite.ID memberikan beberapa layanan mulai dari Jasa Optimasi WordPress di speed, Setup VPS, Migrasi WordPress dan Pembuatan Website.
            </p>
          </div>
          
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
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Optimasi WordPress</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Percayakan optimasi website WordPress Anda kepada Gosite ID dan mulai kesuksesan bisnis Anda sekarang.
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
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Migrasi WordPress</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Gosite ID melayani migrasi dari server lama ke server baru dan dari berbagai macam panel yang kamu gunakan.
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
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Setup & Optimasi VPS</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Setup VPS sesuai dengan kebutuhan WordPress yang sudah teroptimasi untuk meningkatkan aksesibilitas website Anda.
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
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Maintenance VPS & WordPress</h3>
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
      
      {/* Features Section */}
      <section className="py-10 md:py-16 bg-white dark:bg-slate-900">
        <div className="container-lg">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase mb-2 block">Keunggulan Kami</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Mengapa Memilih <span className="text-blue-600 dark:text-blue-400">GOSITE</span>?</h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-[700px] mx-auto">
              Kami menawarkan solusi terbaik untuk meningkatkan performa website WordPress Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kecepatan Loading</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Kami meningkatkan kecepatan website hingga 300% dengan teknik optimasi lanjutan seperti caching, lazy loading, dan minifikasi resource.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                <BarChart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">SEO Friendly</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Performa website yang lebih baik berdampak positif pada ranking SEO Anda di Google dan mesin pencari lainnya.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Keamanan Tinggi</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Implementasi tindakan keamanan untuk melindungi website Anda dari serangan hacker dan malware.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">CDN Integration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Implementasi Content Delivery Network untuk mengirimkan konten dengan cepat ke pengunjung dari seluruh dunia.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Database Optimization</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Pembersihan dan optimasi database untuk menghilangkan overhead dan meningkatkan performa query.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Server Optimization</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Konfigurasi server dengan LEMP stack optimal khusus untuk performa WordPress terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-10 md:py-16 bg-slate-50 dark:bg-slate-800/20">
        <div className="container-lg">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase mb-2 block">Testimoni</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Apa Kata Klien Kami</h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-[700px] mx-auto">
              Lihat bagaimana kami telah membantu klien meningkatkan performa website WordPress mereka
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden mr-4">
                  <Image 
                    src="/images/testimonial1.png" 
                    alt="Customer"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Ahmad Santoso</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">CEO, TechStartup</div>
                </div>
              </div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                &quot;Website kami sekarang loading 3x lebih cepat setelah dioptimasi oleh GOSITE. Sangat puas dengan hasilnya!&quot;
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden mr-4">
                  <Image 
                    src="/images/testimonial2.png" 
                    alt="Customer"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Siti Rahma</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Marketing, FashionStore</div>
                </div>
              </div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                &quot;Proses migrasi website berjalan lancar tanpa downtime. Tim support sangat responsif dan profesional.&quot;
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden mr-4">
                  <Image 
                    src="/images/testimonial4.png" 
                    alt="Customer"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Budi Wijaya</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Owner, TravelBlog</div>
                </div>
              </div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                &quot;Setup VPS yang dilakukan sangat optimal. Website saya sekarang jauh lebih cepat dan aman.&quot;
              </p>
            </div>
            
            {/* Testimonial 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden mr-4">
                  <Image 
                    src="/images/testimonial3.png" 
                    alt="Customer"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Diana Putri</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Blogger, LifestyleBlog</div>
                </div>
              </div>
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                &quot;Layanan maintenance sangat membantu. Setiap masalah selalu ditangani dengan cepat dan profesional.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-white dark:bg-slate-900">
        <div className="container-lg">
          <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Hubungi GOSITE ID</h2>
                <p className="text-blue-100 mb-8 text-base md:text-lg">
                  Jika ada pertanyaan atau apapun yang perlu di diskusikan bisa lansung menghubungi orang dalam GOSITE ID.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="https://wa.me/yourphonenumber" className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-sm">
                    WhatsApp
                  </Link>
                  <Link href="/contact" className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg border border-blue-500 hover:bg-blue-800 transition-colors duration-200">
                    Hubungi
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 bg-blue-700 dark:bg-blue-800 flex items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center">
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