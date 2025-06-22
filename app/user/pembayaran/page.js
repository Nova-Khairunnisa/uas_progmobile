'use client';
import { useState } from 'react';

export default function PembayaranPage() {
  const [metode, setMetode] = useState('');

  const handleBayar = () => {
    alert(`Pembayaran berhasil dengan metode: ${metode}`);
    localStorage.removeItem('keranjang');
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Metode Pembayaran</h1>
      <select
        value={metode}
        onChange={(e) => setMetode(e.target.value)}
        className="p-2 border rounded mb-4"
      >
        <option value="">Pilih Metode</option>
        <option value="Transfer Bank">Transfer Bank</option>
        <option value="QRIS">QRIS</option>
        <option value="COD">Bayar di Tempat</option>
      </select>
      <button
        onClick={handleBayar}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Bayar Sekarang
      </button>
    </main>
  );
}
