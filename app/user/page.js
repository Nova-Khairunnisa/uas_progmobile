'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { produk } from '@/lib/data';

export default function UserDashboard() {
  const router = useRouter();
  const [keranjang, setKeranjang] = useState([]);
  const [pembayaran, setPembayaran] = useState('');
  const [ulasanList, setUlasanList] = useState([]);
  const [ulasan, setUlasan] = useState('');
  const [namaProduk, setNamaProduk] = useState('');

  useEffect(() => {
    const savedUlasan = JSON.parse(localStorage.getItem('ulasan')) || [];
    setUlasanList(savedUlasan);
  }, []);

  const handleTambah = (item) => {
    setKeranjang([...keranjang, item]);
  };

  const handleCheckout = () => {
    if (keranjang.length === 0 || !pembayaran) {
      alert('Pilih produk dan metode pembayaran terlebih dahulu!');
      return;
    }

    const transaksi = {
      id: Date.now(),
      items: keranjang,
      metode: pembayaran,
      waktu: new Date().toLocaleString('id-ID'),
    };

    const histori = JSON.parse(localStorage.getItem('transaksi')) || [];
    histori.push(transaksi);
    localStorage.setItem('transaksi', JSON.stringify(histori));

    alert(`Pembayaran berhasil via ${pembayaran}.`);
    setKeranjang([]);
    setPembayaran('');
  };

  const handleLogout = () => {
    Cookies.remove('role');
    router.push('/login');
  };

  const handleSubmitUlasan = () => {
    if (!ulasan || !namaProduk) return;

    const newUlasan = { namaProduk, isi: ulasan };
    const updatedUlasan = [...ulasanList, newUlasan];
    setUlasanList(updatedUlasan);
    localStorage.setItem('ulasan', JSON.stringify(updatedUlasan));
    setUlasan('');
    setNamaProduk('');
    alert('Ulasan berhasil dikirim!');
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard User</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-3">Katalog Produk</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {produk.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img src={item.gambar} alt={item.nama} className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold">{item.nama}</h3>
            <p className="text-gray-700">Rp{item.harga.toLocaleString()}</p>
            <button
              onClick={() => handleTambah(item)}
              className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Tambah ke Keranjang
            </button>

            {/* Tampilkan ulasan terkait */}
            <div className="mt-2">
              <h4 className="font-semibold">Ulasan:</h4>
              {ulasanList.filter(u => u.namaProduk === item.nama).length === 0 ? (
                <p className="text-sm text-gray-500 italic">Belum ada ulasan</p>
              ) : (
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  {ulasanList
                    .filter(u => u.namaProduk === item.nama)
                    .map((u, i) => (
                      <li key={i}>{u.isi}</li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Keranjang</h2>
      <ul className="mb-4">
        {keranjang.map((item, index) => (
          <li key={index}>
            {item.nama} - Rp{item.harga.toLocaleString()}
          </li>
        ))}
      </ul>

      <label className="block mb-2">Metode Pembayaran:</label>
      <select
        value={pembayaran}
        onChange={(e) => setPembayaran(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="">Pilih</option>
        <option value="Transfer Bank">Transfer Bank</option>
        <option value="E-Wallet">E-Wallet</option>
        <option value="COD">Cash on Delivery</option>
      </select>

      <button
        onClick={handleCheckout}
        className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6"
      >
        Checkout
      </button>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Tulis Ulasan Produk</h2>
        <select
          value={namaProduk}
          onChange={(e) => setNamaProduk(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        >
          <option value="">Pilih Produk</option>
          {produk.map((item) => (
            <option key={item.id} value={item.nama}>
              {item.nama}
            </option>
          ))}
        </select>
        <textarea
          value={ulasan}
          onChange={(e) => setUlasan(e.target.value)}
          rows={3}
          placeholder="Tulis ulasan kamu di sini..."
          className="w-full mb-2 p-2 border rounded"
        />
        <button
          onClick={handleSubmitUlasan}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Kirim Ulasan
        </button>
      </div>
    </div>
  );
}
