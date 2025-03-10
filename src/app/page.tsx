'use client'

import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Manga Dünyasına Hoş Geldiniz</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Öne Çıkan Mangalar Bölümü */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Öne Çıkan Mangalar</h2>
            <div className="space-y-4">
              {/* Manga kartları buraya gelecek */}
              <p className="text-gray-600">Yakında eklenecek...</p>
            </div>
          </div>

          {/* Son Eklenenler Bölümü */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Son Eklenenler</h2>
            <div className="space-y-4">
              {/* Son eklenen mangalar buraya gelecek */}
              <p className="text-gray-600">Yakında eklenecek...</p>
            </div>
          </div>

          {/* Popüler Bölüm */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">En Popüler</h2>
            <div className="space-y-4">
              {/* Popüler mangalar buraya gelecek */}
              <p className="text-gray-600">Yakında eklenecek...</p>
            </div>
          </div>
        </div>

        {/* Keşfet Bölümü */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Kategoriler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Aksiyon', 'Macera', 'Komedi', 'Dram', 'Fantezi', 'Romantik'].map((category) => (
              <Link
                key={category}
                href={`/kategori/${category.toLowerCase()}`}
                className="bg-white rounded-lg shadow p-4 text-center hover:bg-blue-50 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 