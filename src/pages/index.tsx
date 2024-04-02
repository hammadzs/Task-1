
import Link from "next/link"
import { useState } from "react"

import PageLayout from "@/components/PageLayout";
import {toast} from "react-hot-toast";

interface FormData {
  email: string;
  password: string;
}


export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/users/");
    const users = await res.json();
    const user = users.find((u: any) => u.email === formData.email);

    if (!user) {
      toast.error("Invalid Email Address");
    } else if (user.password !== formData.password) {
      toast.error("Invalid Password");
    } else {
      toast.success("Success");
    }
  };

  return (
    <PageLayout>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label
          htmlFor="email"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="email"
            name="email"
            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4"
            placeholder="email"
            onChange={handleChange}
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
            name="password"
            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4"
            placeholder="password"
            onChange={handleChange}
          />

          <span
            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
          >
            Password
          </span>
        </label>
        <button type="submit" className="bg-[#666CFF] w-full text-white p-3 rounded-lg">LOGIN</button>
        <h3 className="text-sm text-gray-500 text-center">Don’t have an account? <Link className="text-[#666CFF]" href={'/signup'}>Sign Up</Link></h3>
      </form>
    </PageLayout>
  );
}
