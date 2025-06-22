'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true'
    setIsLoggedIn(loggedIn)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('loggedIn')
    setIsLoggedIn(false)
    router.push('/login')
  }

  return (
    <nav className="bg-white border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          E-Commerce
        </Link>
        <button
          className="md:hidden block"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className="block py-2 px-4 hover:text-blue-500">Home</Link>
          {!isLoggedIn && (
            <Link href="/login" className="block py-2 px-4 hover:text-blue-500">Login</Link>
          )}
          {isLoggedIn && (
            <>
              <Link href="/dashboard" className="block py-2 px-4 hover:text-blue-500">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="block py-2 px-4 text-red-500 hover:underline"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
