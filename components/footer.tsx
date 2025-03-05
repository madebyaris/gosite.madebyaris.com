import * as React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container-lg py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="font-bold text-2xl tracking-tight flex items-center">
              <span className="text-primary">GO</span>
              <span>SITE</span>
            </Link>
            <p className="text-muted-foreground">
              Optimasi website WordPress Anda sekarang! Percayakan optimasi website WordPress Anda kepada kami dan mulai kesuksesan bisnis Anda.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/madebyaris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </Link>
              <Link
                href="https://twitter.com/arisberikut"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium uppercase tracking-wider text-primary">Layanan</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/speed-up-wp" className="text-foreground/80 hover:text-primary transition-colors">
                  Speed UP WP
                </Link>
              </li>
              <li>
                <Link href="/services/migrasi-wp" className="text-foreground/80 hover:text-primary transition-colors">
                  Migrasi WP
                </Link>
              </li>
              <li>
                <Link href="/services/setup-vps" className="text-foreground/80 hover:text-primary transition-colors">
                  Setup VPS
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-foreground/80 hover:text-primary transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium uppercase tracking-wider text-primary">Hubungi</h3>
            <p className="text-foreground/80">
              Jika ada pertanyaan atau apapun yang perlu di diskusikan bisa langsung menghubungi kami.
            </p>
            <Link
              href="/contact"
              className="button-modern button-modern-primary inline-flex"
            >
              Hubungi
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GOSITE. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
