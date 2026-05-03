"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-2xl font-bold text-orange-500">
          SunCart ☀️
        </h1>

        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/products" className="hover:text-orange-500">Products</Link>
          <Link href="/my-profile" className="hover:text-orange-500">Profile</Link>
        </div>

        <div className="flex gap-3">
          <Link href="/login" className="btn btn-sm btn-outline">
            Login
          </Link>
          <Link href="/register" className="btn btn-sm bg-orange-500 text-white border-none">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}