// app/page.js

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard E-Commerce</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Jumlah Produk</h2>
          <p className="text-3xl text-blue-500 font-bold">128</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Pesanan Masuk</h2>
          <p className="text-3xl text-green-500 font-bold">57</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Customer Terdaftar</h2>
          <p className="text-3xl text-purple-500 font-bold">342</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Lihat Halaman Kontak
        </a>
      </div>
    </main>
  );
}
