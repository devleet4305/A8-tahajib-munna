"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md">

      {/* Top bar */}
      <div className="max-w-7xl mx-auto flex justify-end gap-6 text-xs py-1 opacity-90">
        <span>SAVE MORE ON APP</span>
        <span>BECOME A SELLER</span>
        <span>HELP & SUPPORT</span>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto flex items-center gap-6 py-4 px-4">

        <h1 className="text-2xl font-bold tracking-tight">
          SunCart ☀️
        </h1>

        <input
          placeholder="Search products..."
          className="flex-1 px-4 py-2 rounded-full text-black focus:outline-none shadow-sm"
        />

        <Link href="/login" className="hover:underline">
          Login
        </Link>

        <Link
          href="/register"
          className="bg-white text-orange-500 px-4 py-1 rounded-full font-semibold"
        >
          Sign Up
        </Link>

      </div>
    </div>
  );
}