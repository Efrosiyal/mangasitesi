import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manga Dünyası',
  description: 'En iyi manga okuma platformu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <header className="bg-white shadow">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-xl font-bold">Manga Dünyası</a>
              <div className="space-x-4">
                <a href="/mangalar" className="hover:text-blue-600">Mangalar</a>
                <a href="/kategoriler" className="hover:text-blue-600">Kategoriler</a>
                <a href="/giris" className="hover:text-blue-600">Giriş Yap</a>
                <a href="/kayit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Kayıt Ol</a>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Hakkımızda</h3>
                <p className="text-gray-300">Manga Dünyası, en sevdiğiniz mangaları okuyabileceğiniz bir platformdur.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
                <ul className="space-y-2">
                  <li><a href="/mangalar" className="text-gray-300 hover:text-white">Mangalar</a></li>
                  <li><a href="/kategoriler" className="text-gray-300 hover:text-white">Kategoriler</a></li>
                  <li><a href="/populer" className="text-gray-300 hover:text-white">Popüler</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">İletişim</h3>
                <ul className="space-y-2">
                  <li><a href="/iletisim" className="text-gray-300 hover:text-white">Bize Ulaşın</a></li>
                  <li><a href="/sss" className="text-gray-300 hover:text-white">SSS</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; 2024 Manga Dünyası. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 