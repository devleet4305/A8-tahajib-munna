"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md w-80 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}