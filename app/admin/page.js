'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { produk } from '../lib/data'; // dari /app/admin/page.js


export default function AdminPage() {
  const router = useRouter();
  const [role, setRole] = useState('');

  useEffect(() => {
    const userRole = Cookies.get('role');
    if (userRole !== 'admin') {
      router.push('/login');
    } else {
      setRole(userRole);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('role');
    router.push('/login');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {produk.map((item) => (
          <div key={item.id} className="bg-white shadow p-4 rounded">
            <img src={item.gambar} alt={item.nama} className="w-full h-40 object-cover mb-3" />
            <h2 className="text-xl font-semibold">{item.nama}</h2>
            <p className="text-gray-700">Rp{item.harga}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
