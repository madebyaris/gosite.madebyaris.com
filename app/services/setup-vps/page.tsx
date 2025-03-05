import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Setup VPS - GOSITE',
  description: 'Layanan konfigurasi VPS profesional untuk website WordPress dengan performa tinggi, keamanan optimal, dan skalabilitas untuk bisnis Anda.',
}

export default function SetupVPSPage() {
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
              Performa Tinggi
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-primary">Setup</span> VPS
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Konfigurasi server VPS yang optimal untuk website WordPress dengan performa tinggi
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
                src="/images/setup-vps.svg"
                alt="VPS Setup Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Mengapa Perlu Setup VPS Profesional?</h2>
              <p className="text-lg text-muted-foreground">
                VPS (Virtual Private Server) menawarkan performa dan kontrol yang lebih baik dibandingkan shared hosting, tetapi membutuhkan konfigurasi yang tepat untuk:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={16} />
                  </div>
                  <p>Memaksimalkan performa dan kecepatan website</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={16} />
                  </div>
                  <p>Mengamankan server dari serangan dan malware</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={16} />
                  </div>
                  <p>Mengoptimalkan penggunaan sumber daya server</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={16} />
                  </div>
                  <p>Menyiapkan sistem backup dan pemulihan yang handal</p>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-lg font-medium">
                  Dengan layanan Setup VPS kami, Anda mendapatkan server yang dikonfigurasi secara profesional untuk performa optimal WordPress!
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
              Layanan Setup VPS kami mencakup konfigurasi lengkap server untuk performa WordPress yang optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={16} />
              </div>
              <h3 className="text-xl font-medium mb-3">Instalasi OS & Web Server</h3>
              <p className="text-muted-foreground">
                Instalasi sistem operasi Linux dan konfigurasi web server (Nginx/Apache) yang optimal untuk WordPress.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={16} />
              </div>
              <h3 className="text-xl font-medium mb-3">Keamanan Server</h3>
              <p className="text-muted-foreground">
                Konfigurasi firewall, SSH, fail2ban, dan pengaturan keamanan lainnya untuk melindungi server dari serangan.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={16} />
              </div>
              <h3 className="text-xl font-medium mb-3">Optimasi PHP & MySQL</h3>
              <p className="text-muted-foreground">
                Konfigurasi PHP-FPM dan MySQL/MariaDB untuk performa optimal dengan WordPress, termasuk caching dan pengaturan memori.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={16} />
              </div>
              <h3 className="text-xl font-medium mb-3">SSL & CDN</h3>
              <p className="text-muted-foreground">
                Instalasi sertifikat SSL (Let&apos;s Encrypt) dan konfigurasi CDN untuk meningkatkan keamanan dan kecepatan website.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={16} />
              </div>
              <h3 className="text-xl font-medium mb-3">Sistem Backup</h3>
              <p className="text-muted-foreground">
                Konfigurasi sistem backup otomatis untuk file dan database, dengan penyimpanan di lokasi terpisah untuk keamanan data.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Check size={16} />
              </div>
              <h3 className="text-xl font-medium mb-3">Monitoring & Alerting</h3>
              <p className="text-muted-foreground">
                Kami menyiapkan sistem monitoring dan alerting untuk memantau kesehatan server Anda. Dapatkan notifikasi saat terjadi masalah sebelum berdampak pada pengguna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Spesifikasi Teknis</h2>
            <p className="text-lg text-muted-foreground">
              Stack teknologi yang kami gunakan untuk setup VPS WordPress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium flex items-center gap-2">
                  <Check size={16} />
                  Sistem Operasi
                </h3>
                <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                  <li>Ubuntu Server LTS (20.04/22.04)</li>
                  <li>Debian 11/12</li>
                  <li>CentOS/AlmaLinux/Rocky Linux</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium flex items-center gap-2">
                  <Check size={16} />
                  Web Server
                </h3>
                <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                  <li>Nginx (direkomendasikan untuk performa terbaik)</li>
                  <li>Apache dengan mod_pagespeed</li>
                  <li>Konfigurasi hybrid Nginx + Apache</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium flex items-center gap-2">
                  <Check size={16} />
                  PHP & Database
                </h3>
                <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                  <li>PHP 8.1/8.2 dengan PHP-FPM</li>
                  <li>MariaDB 10.6+ atau MySQL 8.0+</li>
                  <li>Redis untuk object caching</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium flex items-center gap-2">
                  <Check size={16} />
                  Keamanan
                </h3>
                <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                  <li>UFW/IPTables Firewall</li>
                  <li>Fail2ban untuk proteksi brute force</li>
                  <li>ModSecurity WAF</li>
                  <li>Secure SSH configuration</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium flex items-center gap-2">
                  <Check size={16} />
                  Backup & Recovery
                </h3>
                <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                  <li>Backup otomatis harian dengan rotasi</li>
                  <li>Backup offsite ke cloud storage</li>
                  <li>Sistem pemulihan cepat</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium flex items-center gap-2">
                  <Check size={16} />
                  Monitoring
                </h3>
                <p className="text-muted-foreground">
                  Kami menyiapkan sistem monitoring dan alerting untuk memantau kesehatan server Anda. Dapatkan notifikasi saat terjadi masalah sebelum berdampak pada pengguna.
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
              Investasi untuk server VPS yang dikonfigurasi secara profesional
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 bg-primary/5">
                <h3 className="text-2xl font-bold mb-2">Paket Setup VPS</h3>
                <p className="text-muted-foreground mb-4">
                  Konfigurasi lengkap server VPS untuk WordPress
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">Rp 2.500.000</span>
                  <span className="text-muted-foreground">/ server</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-medium mb-4">Yang Anda Dapatkan:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Instalasi dan konfigurasi sistem operasi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Setup LEMP stack (Linux, Nginx, MySQL, PHP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Konfigurasi keamanan server</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Instalasi SSL dan optimasi Nginx</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Setup WordPress dengan optimasi performa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Konfigurasi sistem backup otomatis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={16} />
                    </div>
                    <span>Panduan pengelolaan server</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Meningkatkan Performa Website Anda?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan server VPS yang dikonfigurasi secara profesional!
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