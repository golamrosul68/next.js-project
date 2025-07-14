// app/signup/page.jsx

import Head from 'next/head';

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Signup - Hand-drawn Paper UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-hand">
        <main className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border-2 border-dashed border-gray-400">
          <h1 className="text-3xl text-blue-800 font-bold mb-6 relative inline-block">
            Sign Up
            <span className="absolute left-0 -bottom-2 w-16 h-1.5 bg-blue-200 rounded transform -rotate-2 shadow-sm"></span>
          </h1>

          <form className="space-y-5">
            <div>
              <label htmlFor="fullname" className="block text-gray-700 text-lg mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="John Doe"
                className="w-full px-4 py-2 border-2 border-dashed border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-lg mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border-2 border-dashed border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 text-lg mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                minLength={6}
                className="w-full px-4 py-2 border-2 border-dashed border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <p className="text-sm text-gray-500 mt-1">At least 6 characters</p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-100 text-blue-800 font-bold py-2 rounded-md border-2 border-dashed border-blue-500 hover:bg-blue-500 hover:text-white transition"
              >
                Create Account
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
