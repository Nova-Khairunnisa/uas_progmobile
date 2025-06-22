// app/layout.js
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Ecommerce Dashboard',
  description: 'Dashboard sederhana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ← Navigasi tampil di semua halaman */}
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
