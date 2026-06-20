import Link from "next/link";
import { Globe, LockKeyhole } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-86px)] max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2">
      
      <section>
        <h1 className="text-4xl font-black">Welcome back</h1>
        <p className="mt-3 text-slate-500">
          Sign in to sync wishlist, price alerts, recommendations, orders, and verified reviews.
        </p>

        <div className="mt-6 grid gap-3 text-sm">
          {[
            "Email + password authentication",
            "Google OAuth ready",
            "JWT/session API endpoints",
            "Role-based admin access",
          ].map((item) => (
            <div key={item} className="panel rounded-lg p-4">
              {item}
            </div>
          ))}
        </div>
      </section>

      <form className="panel rounded-lg p-6">
        <div className="mb-6 flex items-center gap-2">
          <LockKeyhole className="text-brand" />
          <h2 className="text-2xl font-black">Login</h2>
        </div>

        <label className="block text-sm font-semibold">
          Email
          <input className="field mt-2 w-full" type="email" placeholder="you@example.com" />
        </label>

        <label className="mt-4 block text-sm font-semibold">
          Password
          <input className="field mt-2 w-full" type="password" placeholder="Password" />
        </label>

        <button className="btn-primary mt-5 w-full" type="button">
          Sign in
        </button>

        <button className="btn-secondary mt-3 w-full" type="button">
          <Globe size={18} /> Continue with Google
        </button>

        <p className="mt-4 text-center text-sm text-slate-500">
          New here?{" "}
          <Link className="font-semibold text-brand" href="/login">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}