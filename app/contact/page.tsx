import * as React from 'react'
import type { Metadata } from 'next'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  HelpCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Made by Aris',
  description: 'Get in touch with our WordPress experts for free consultation and website optimization solutions.',
}

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-slate-900">
      {/* Contact Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b from-transparent to-white dark:to-slate-900 opacity-30"></div>
        <div className="container-lg relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase mb-4">Get In Touch</div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Let&apos;s <span className="text-blue-600 dark:text-blue-400">Connect</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Have questions about our WordPress services? Need a custom solution? Our team is ready to help you achieve your website goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section - Modified to take full width */}
      <section className="py-16 md:py-20">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  We&apos;re ready to help with your WordPress optimization needs. Reach out through any of the contact methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-300">+62 888 888 888</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Available Mon-Fri, 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300">arissetia.m@gmail.com</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Sidoarjo, Jawa Timur<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4 p-4 rounded-xl transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Monday - Friday:</span>
                        <span className="font-medium">09:00 - 17:00 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Saturday:</span>
                        <span className="font-medium">09:00 - 15:00 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-800/20">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Visit our office for an in-person consultation
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] relative">
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <p className="text-lg font-medium">Google Maps will be displayed here</p>
                <p className="text-slate-500 dark:text-slate-400">Jl. Raya Utama No. 123, Jakarta Selatan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider uppercase mb-4">FAQ</div>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Here are some common questions our clients ask
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">How long does WordPress optimization take?</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    The time required for WordPress optimization varies depending on the complexity of your website and the issues that need to be fixed. Generally, basic optimization can be completed within 2-3 business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Does maintenance include plugin and theme updates?</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Yes, our maintenance services include regular plugin and theme updates, website backups, security monitoring, and performance optimization to ensure your website runs optimally at all times.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Do you offer emergency WordPress support?</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Yes, we offer emergency WordPress support for critical issues. Our priority support ensures that urgent problems are addressed promptly, minimizing downtime and potential business impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Can you help with custom WordPress development?</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Absolutely! We specialize in custom WordPress development, including theme customization, plugin development, and creating unique features tailored to your specific business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-blue-900/20">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your WordPress Site?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Get in touch today for a free consultation and let&apos;s discuss how we can help improve your website&apos;s performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                Schedule a Call
                <Phone className="ml-2 h-4 w-4" />
              </a>
              <a href="mailto:hello@madebyaris.com" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 font-medium transition-colors">
                Email Us
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 