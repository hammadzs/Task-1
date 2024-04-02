import Link from "next/link"

const SignInFrom = () => {
  return (
    <form className="space-y-4">
      <label
        htmlFor="email"
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="text"
          id="email"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4"
          placeholder="email"
        />

        <span
          className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
        >
          Email
        </span>
      </label>
      <label
        htmlFor="password"
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="text"
          id="password"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4"
          placeholder="password"
        />

        <span
          className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
        >
          Password
        </span>
      </label>
      <button type="submit" className="bg-[#666CFF] w-full text-white p-3 rounded-lg">LOGIN</button>
      <h3 className="text-sm text-gray-500 text-center">Don’t have an account? <Link className="text-[#666CFF]" href={'/register'}>Sign Up</Link></h3>
    </form>
  )
}

export default SignInFrom
