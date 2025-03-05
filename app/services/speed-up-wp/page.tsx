import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Speed UP WP - GOSITE',
  description: 'Layanan optimasi kecepatan website WordPress untuk meningkatkan performa, pengalaman pengguna, dan SEO.',
}

export default function SpeedUpWPPage() {
  return (
    <>
      {/* Service Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute top-60 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div className="container-lg relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              Layanan Unggulan
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-primary">Speed UP</span> WordPress
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tingkatkan kecepatan loading website WordPress Anda untuk pengalaman pengguna yang lebih baik dan SEO yang optimal
            </p>
            <Link href="/contact" className="button-modern button-modern-primary px-6 py-3">
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative mx-auto lg:mx-0 w-full max-w-lg h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/speed-up-wp.svg"
                alt="Speed UP WordPress Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Mengapa Kecepatan Website Penting?</h2>
              <p className="text-lg text-muted-foreground">
                Kecepatan website adalah faktor penting yang mempengaruhi pengalaman pengguna dan peringkat SEO. Website yang lambat dapat menyebabkan:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={16} />
                  </div>
                  <p>Tingkat bounce rate yang tinggi (pengunjung meninggalkan website)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={16} />
                  </div>
                  <p>Konversi yang rendah (pengunjung tidak menjadi pelanggan)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={16} />
                  </div>
                  <p>Peringkat SEO yang buruk di mesin pencari Google</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={16} />
                  </div>
                  <p>Pengalaman pengguna yang buruk dan citra brand yang negatif</p>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-lg font-medium">
                  Dengan layanan Speed UP WP kami, Anda dapat meningkatkan kecepatan website WordPress hingga 300% lebih cepat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Apa yang Kami Lakukan?</h2>
            <p className="text-lg text-muted-foreground">
              Layanan Speed UP WP kami mencakup berbagai optimasi untuk meningkatkan kecepatan website WordPress Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Optimasi Database</h3>
              <p className="text-muted-foreground">
                Membersihkan dan mengoptimalkan database WordPress untuk mengurangi ukuran dan meningkatkan kecepatan query.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Konfigurasi Caching</h3>
              <p className="text-muted-foreground">
                Implementasi sistem caching tingkat lanjut untuk menyimpan versi statis halaman dan mengurangi waktu loading.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Optimasi Gambar</h3>
              <p className="text-muted-foreground">
                Kompresi dan optimasi gambar tanpa mengurangi kualitas visual, serta implementasi lazy loading.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Minifikasi File</h3>
              <p className="text-muted-foreground">
                Minifikasi CSS, JavaScript, dan HTML untuk mengurangi ukuran file dan mempercepat waktu loading.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Optimasi Plugin</h3>
              <p className="text-muted-foreground">
                Audit dan optimasi plugin untuk menghilangkan yang tidak perlu dan mengkonfigurasi yang penting untuk performa maksimal.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Keamanan & Performa</h3>
              <p className="text-muted-foreground">
                Implementasi praktik keamanan terbaik yang juga meningkatkan performa website secara keseluruhan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Proses Optimasi</h2>
            <p className="text-lg text-muted-foreground">
              Bagaimana kami meningkatkan kecepatan website WordPress Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-px bg-primary/20 -z-10 md:block hidden"></div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 z-10">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Audit Website</h3>
                <p className="text-muted-foreground text-center md:text-left">
                  Kami melakukan audit menyeluruh terhadap website WordPress Anda untuk mengidentifikasi masalah performa.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-px bg-primary/20 -z-10 md:block hidden"></div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 z-10">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Optimasi Teknis</h3>
                <p className="text-muted-foreground text-center md:text-left">
                  Implementasi solusi teknis untuk memperbaiki masalah performa yang ditemukan dalam audit.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-px bg-primary/20 -z-10 md:block hidden"></div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 z-10">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Pengujian</h3>
                <p className="text-muted-foreground text-center md:text-left">
                  Pengujian menyeluruh untuk memastikan semua optimasi berfungsi dengan baik dan tidak ada masalah baru.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 z-10">
                  <span className="text-lg font-bold">4</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Laporan & Rekomendasi</h3>
                <p className="text-muted-foreground text-center md:text-left">
                  Laporan detail tentang optimasi yang dilakukan dan rekomendasi untuk pemeliharaan berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Harga Layanan</h2>
            <p className="text-lg text-muted-foreground">
              Investasi untuk website WordPress yang lebih cepat dan performa yang optimal
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 bg-primary/5">
                <h3 className="text-2xl font-bold mb-2">Paket Speed UP WP</h3>
                <p className="text-muted-foreground mb-4">
                  Solusi lengkap untuk meningkatkan kecepatan website WordPress Anda
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">Rp 1.500.000</span>
                  <span className="text-muted-foreground">/ website</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-medium mb-4">Yang Anda Dapatkan:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Audit performa website menyeluruh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Optimasi database WordPress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Konfigurasi caching tingkat lanjut</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Optimasi gambar dan aset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Minifikasi CSS, JavaScript, dan HTML</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Audit dan optimasi plugin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Laporan performa sebelum dan sesudah</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Dukungan 30 hari setelah optimasi</span>
                  </li>
                </ul>
                <Link href="/contact" className="button-modern button-modern-primary w-full py-3">
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Meningkatkan Kecepatan Website WordPress Anda?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan website WordPress yang lebih cepat!
            </p>
            <Link href="/contact" className="button-modern button-modern-primary px-8 py-4 text-lg">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 