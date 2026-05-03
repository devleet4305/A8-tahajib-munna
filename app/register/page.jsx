"use client";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Register</h1>

      <input placeholder="Name" className="input input-bordered w-full mb-3" />
      <input placeholder="Email" className="input input-bordered w-full mb-3" />
      <input placeholder="Photo URL" className="input input-bordered w-full mb-3" />
      <input type="password" placeholder="Password" className="input input-bordered w-full mb-3" />

      <button className="btn bg-orange-500 text-white w-full">
        Register
      </button>
    </form>
  );
}