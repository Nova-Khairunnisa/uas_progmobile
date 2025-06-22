// components/LayoutAdmin.js
import Link from 'next/link'

export default function LayoutAdmin({ children }) {
  return (
    <div>
      <nav className="bg-red-600 p-4 text-white flex justify-between">
        <Link href="/admin/dashboard">Dashboard Admin</Link>
        <Link href="/">Keluar</Link>
      </nav>
      <main className="p-4 bg-white min-h-screen">{children}</main>
    </div>
  )
}
