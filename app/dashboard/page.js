'use client';

import { produk } from '../../lib/data';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Dashboard</h1>
      <p className="mb-6 text-gray-700">Selamat datang! Ini adalah dashboard yang menampilkan data produk.</p>

      <h2 className="text-xl font-semibold mb-4">Daftar Produk</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produk.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={item.gambar}
              alt={item.nama}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold">{item.nama}</h3>
            <p className="text-gray-600 mb-1">Harga: Rp{item.harga}</p>
            <p className="text-sm text-gray-500 mb-2">{item.deskripsi}</p>
            <Link
              href={`/produk/${item.id}`}
              className="text-indigo-600 hover:underline text-sm"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
