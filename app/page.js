'use client';

import Link from 'next/link';

export default function HeroPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="text-center bg-white bg-opacity-80 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-xl w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Selamat Datang di E-Commerce App</h1>
        <p className="text-lg text-gray-700 mb-8">Nikmati pengalaman belanja terbaik dengan berbagai produk menarik!</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
