import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Maintenance WordPress - GOSITE',
  description: 'Layanan pemeliharaan WordPress rutin untuk menjaga website Anda tetap aman, cepat, dan up-to-date.',
}

export default function MaintenancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute top-60 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div className="container-lg relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                Dukungan 24/7
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Layanan <span className="text-primary">Maintenance</span> WordPress
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Jaga website WordPress Anda tetap aman, cepat, dan up-to-date dengan layanan pemeliharaan rutin dari tim ahli kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="button-modern button-modern-primary">
                  Konsultasi Gratis
                </Link>
                <Link href="#faqs" className="button-modern button-modern-outline">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
            <div className="relative mx-auto lg:mx-0 w-full max-w-lg h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/maintenance.svg"
                alt="WordPress Maintenance Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Kenapa Memilih Layanan Maintenance Kami?</h2>
            <p className="text-lg text-muted-foreground">
              Kami menawarkan solusi pemeliharaan WordPress komprehensif untuk menjaga website Anda berjalan dengan performa optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Pemantauan Keamanan 24/7</h3>
              <p className="text-muted-foreground">
                Kami memantau website Anda sepanjang waktu untuk mendeteksi dan mencegah ancaman keamanan sebelum menjadi masalah serius.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Update Berkala</h3>
              <p className="text-muted-foreground">
                Kami melakukan update rutin untuk core WordPress, plugin, dan tema untuk memastikan website Anda selalu menggunakan versi terbaru dan aman.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M2 15h10"></path>
                  <path d="m9 18 3-3-3-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Backup Otomatis</h3>
              <p className="text-muted-foreground">
                Backup website secara otomatis setiap minggu dan simpan di lokasi aman, sehingga Anda selalu memiliki salinan terbaru jika terjadi masalah.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
                  <path d="m12 8 4 4-4 4"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimasi Performa</h3>
              <p className="text-muted-foreground">
                Pemeliharaan database dan cache secara rutin untuk memastikan website Anda tetap cepat dan responsif untuk pengunjung.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Laporan Bulanan</h3>
              <p className="text-muted-foreground">
                Dapatkan laporan detail tentang uptime, performa, update yang dilakukan, dan masalah yang ditemukan/diperbaiki setiap bulan.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dukungan Teknis</h3>
              <p className="text-muted-foreground">
                Tim dukungan teknis kami siap membantu jika Anda mengalami masalah atau memiliki pertanyaan tentang website WordPress Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Paket Maintenance</h2>
            <p className="text-lg text-muted-foreground">
              Pilih paket maintenance yang sesuai dengan kebutuhan website WordPress Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-md">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">Rp 500.000</span>
                  <span className="text-muted-foreground">/ bulan</span>
                </div>
                <p className="text-muted-foreground mb-8">
                  Ideal untuk blog personal atau website bisnis kecil
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Update WordPress Core bulanan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Update plugin & tema bulanan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Backup website mingguan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Pemantauan uptime</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Laporan bulanan</p>
                  </div>
                </div>
                
                <Link href="/contact" className="button-modern button-modern-primary w-full">
                  Pilih Paket
                </Link>
              </div>
            </div>

            {/* Premium Plan - Highlighted */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md border-2 border-primary relative transition-all duration-300 hover:shadow-lg -mt-4 -mb-4">
              <div className="absolute top-0 inset-x-0 bg-primary text-white text-center py-2 text-sm font-medium">
                PALING POPULER
              </div>
              <div className="p-8 pt-16">
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">Rp 750.000</span>
                  <span className="text-muted-foreground">/ bulan</span>
                </div>
                <p className="text-muted-foreground mb-8">
                  Ideal untuk website bisnis atau toko online
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Semua fitur Basic</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Update plugin & tema mingguan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Backup website 2x seminggu</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Pemantauan keamanan 24/7</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Optimasi database bulanan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Dukungan email prioritas</p>
                  </div>
                </div>
                
                <Link href="/contact" className="button-modern button-modern-primary w-full">
                  Pilih Paket
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-md">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">Rp 1.200.000</span>
                  <span className="text-muted-foreground">/ bulan</span>
                </div>
                <p className="text-muted-foreground mb-8">
                  Untuk website besar dengan traffic tinggi
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Semua fitur Premium</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Backup website harian</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Audit keamanan bulanan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Optimasi performa mingguan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Waktu respons 2 jam 24/7</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <Check size={18} />
                    </div>
                    <p>Sesi konsultasi bulanan</p>
                  </div>
                </div>
                
                <Link href="/contact" className="button-modern button-modern-primary w-full">
                  Pilih Paket
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16 md:py-24">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Pertanyaan Umum</h2>
            <p className="text-lg text-muted-foreground">
              Jawaban untuk pertanyaan yang sering ditanyakan tentang layanan maintenance WordPress kami
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-border">
            {/* FAQ Item 1 */}
            <div className="py-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Apa saja yang tercakup dalam layanan maintenance WordPress?</h3>
                <div className="flex-shrink-0 text-primary">
                  <HelpCircle size={20} />
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                <p>Layanan maintenance WordPress kami mencakup update berkala untuk WordPress core, plugin, dan tema, backup rutin, pemantauan keamanan, optimasi database, dan dukungan teknis. Kami juga menyediakan laporan bulanan tentang status website Anda.</p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="py-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Seberapa sering Anda melakukan backup website?</h3>
                <div className="flex-shrink-0 text-primary">
                  <HelpCircle size={20} />
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                <p>Frekuensi backup tergantung pada paket yang Anda pilih. Paket Basic menyediakan backup mingguan, Premium 2x seminggu, dan Enterprise harian. Semua backup disimpan secara aman di lokasi terpisah untuk perlindungan maksimal.</p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="py-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Bagaimana jika website saya bermasalah di luar jam kerja?</h3>
                <div className="flex-shrink-0 text-primary">
                  <HelpCircle size={20} />
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                <p>Untuk pelanggan Premium dan Enterprise, kami menyediakan pemantauan 24/7 dan sistem respons darurat. Jika terjadi masalah, tim kami akan segera diberitahu dan akan mengambil tindakan sesuai dengan tingkat prioritas paket Anda.</p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="py-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Apakah layanan Anda mencakup perbaikan bug pada tema atau plugin?</h3>
                <div className="flex-shrink-0 text-primary">
                  <HelpCircle size={20} />
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                <p>Ya, layanan kami mencakup perbaikan bug minor pada tema dan plugin sebagian dari paket Premium dan Enterprise. Untuk perbaikan bug yang lebih kompleks atau kustomisasi, kami menawarkan layanan tambahan dengan biaya terpisah.</p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="py-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Dapatkah saya beralih antar paket?</h3>
                <div className="flex-shrink-0 text-primary">
                  <HelpCircle size={20} />
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                <p>Tentu saja! Anda dapat beralih antar paket kapan saja. Perubahan akan berlaku pada siklus penagihan berikutnya. Kami juga menawarkan periode uji coba gratis 7 hari untuk pelanggan baru.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Mengamankan Website WordPress Anda?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Jangan biarkan website Anda berisiko. Mulai layanan maintenance hari ini dan nikmati ketenangan pikiran dengan WordPress yang aman dan optimal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="button-modern button-modern-primary">
                  Mulai Sekarang
                </Link>
                <Link href="/services" className="button-modern button-modern-outline">
                  Lihat Semua Layanan
                </Link>
              </div>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/maintenance-cta.svg"
                alt="WordPress Maintenance Support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 