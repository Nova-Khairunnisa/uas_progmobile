// app/produk/page.js
import { produk } from '../../lib/data'; // ← ini penting!
import Link from 'next/link';

export default function ProdukPage() {
  if (!produk) return <p>Produk tidak ditemukan</p>; // pengecekan ekstra

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      <ul className="space-y-3">
        {produk.map((item) => (
          <li key={item.id} className="bg-white p-4 shadow rounded">
            <Link href={`/produk/${item.id}`}>
              {item.nama} - Rp{item.harga}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
