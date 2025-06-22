// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const role = request.cookies.get('role')?.value;
  const { pathname } = request.nextUrl;

  // Proteksi halaman admin
  if (pathname.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  // Proteksi halaman user
  if (pathname.startsWith('/user') && role !== 'user') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};
