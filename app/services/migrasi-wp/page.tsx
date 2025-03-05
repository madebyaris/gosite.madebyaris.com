import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Migrasi WP - GOSITE',
  description: 'Layanan migrasi website WordPress tanpa downtime dan kehilangan data penting untuk pengalaman perpindahan hosting yang lancar.',
}

export default function MigrasiWPPage() {
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
              Tanpa Downtime
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-primary">Migrasi</span> WordPress
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Pindahkan website WordPress Anda ke hosting baru tanpa downtime dan kehilangan data penting
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
                src="/images/migrasi-wp.svg"
                alt="WordPress Migration Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Mengapa Migrasi WordPress Penting?</h2>
              <p className="text-lg text-muted-foreground">
                Migrasi website WordPress adalah proses yang kompleks dan berisiko jika tidak dilakukan dengan benar. Beberapa risiko yang mungkin terjadi:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check />
                  </div>
                  <p>Kehilangan data penting seperti postingan, halaman, dan komentar</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check />
                  </div>
                  <p>Downtime yang lama sehingga pengunjung tidak dapat mengakses website</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check />
                  </div>
                  <p>Masalah kompatibilitas dengan hosting baru yang menyebabkan error</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check />
                  </div>
                  <p>Penurunan peringkat SEO akibat perubahan struktur URL atau downtime</p>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-lg font-medium">
                  Dengan layanan Migrasi WP kami, Anda dapat memindahkan website WordPress dengan aman, tanpa downtime, dan tanpa kehilangan data penting!
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
              Layanan Migrasi WP kami mencakup berbagai langkah untuk memastikan perpindahan website WordPress Anda berjalan lancar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check />
              </div>
              <h3 className="text-xl font-medium mb-3">Backup Lengkap</h3>
              <p className="text-muted-foreground">
                Backup lengkap semua file website, database, dan konfigurasi untuk memastikan tidak ada data yang hilang.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check />
              </div>
              <h3 className="text-xl font-medium mb-3">Staging Environment</h3>
              <p className="text-muted-foreground">
                Membuat lingkungan staging di hosting baru untuk memastikan semua berfungsi dengan baik sebelum migrasi penuh.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check />
              </div>
              <h3 className="text-xl font-medium mb-3">Migrasi Tanpa Downtime</h3>
              <p className="text-muted-foreground">
                Teknik migrasi khusus yang memastikan website tetap online selama proses perpindahan berlangsung.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check />
              </div>
              <h3 className="text-xl font-medium mb-3">Konfigurasi Server</h3>
              <p className="text-muted-foreground">
                Konfigurasi server baru untuk performa optimal dengan WordPress, termasuk pengaturan PHP, MySQL, dan web server.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check />
              </div>
              <h3 className="text-xl font-medium mb-3">Pengujian Menyeluruh</h3>
              <p className="text-muted-foreground">
                Pengujian semua fitur website, formulir, plugin, dan integrasi untuk memastikan semuanya berfungsi dengan baik.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check />
              </div>
              <h3 className="text-xl font-medium mb-3">Pemeliharaan Pasca-Migrasi</h3>
              <p className="text-muted-foreground">
                Dukungan dan pemantauan selama 7 hari setelah migrasi untuk memastikan website berjalan stabil di hosting baru.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Proses Migrasi</h2>
            <p className="text-lg text-muted-foreground">
              Bagaimana kami memindahkan website WordPress Anda dengan aman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-px bg-primary/20 -z-10 md:block hidden"></div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 z-10">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Analisis Website</h3>
                <p className="text-muted-foreground text-center md:text-left">
                  Menganalisis website saat ini, termasuk ukuran, plugin, tema, dan konfigurasi khusus.
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
                <h3 className="text-xl font-medium mb-2">Backup Lengkap</h3>
                <p className="text-muted-foreground text-center md:text-left">
                  Membuat backup lengkap semua file dan database website.
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
                <h3 className="text-xl font-medium mb-2">Setup Staging</h3>
                <p className="text-muted-foreground text-center md:text-left">
                  Membuat lingkungan staging di hosting baru dan memindahkan website.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-px bg-primary/20 -z-10 md:block hidden"></div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 z-10">
                  <span className="text-lg font-bold">4</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Pengujian</h3>
                <p className="text-muted-foreground text-center md:text-left">
                  Menguji semua fitur website di lingkungan staging untuk memastikan semuanya berfungsi.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 z-10">
                  <span className="text-lg font-bold">5</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Go Live</h3>
                <p className="text-muted-foreground text-center md:text-left">
                  Mengalihkan domain ke hosting baru dan memastikan semua berjalan lancar.
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
              Investasi untuk migrasi website WordPress yang aman dan tanpa downtime
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 bg-primary/5">
                <h3 className="text-2xl font-bold mb-2">Paket Migrasi WP</h3>
                <p className="text-muted-foreground mb-4">
                  Solusi lengkap untuk memindahkan website WordPress Anda dengan aman
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">Rp 1.200.000</span>
                  <span className="text-muted-foreground">/ website</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-medium mb-4">Yang Anda Dapatkan:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check />
                    </div>
                    <span>Analisis website menyeluruh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check />
                    </div>
                    <span>Backup lengkap file dan database</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check />
                    </div>
                    <span>Migrasi tanpa downtime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check />
                    </div>
                    <span>Konfigurasi server untuk performa optimal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check />
                    </div>
                    <span>Pengujian menyeluruh semua fitur website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check />
                    </div>
                    <span>Pemindahan domain dan DNS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check />
                    </div>
                    <span>Dukungan 7 hari setelah migrasi</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Memindahkan Website WordPress Anda?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan migrasi website WordPress yang aman dan tanpa downtime!
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