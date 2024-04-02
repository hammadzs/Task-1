import Link from "next/link"
import { useState } from "react"
import PageLayout from "@/components/PageLayout"

interface FormData {
    fullname: string;
    role: string;
    email: string;
    password: string;
}

const signup = () => {
    const [formData, setFormData] = useState<FormData>({
        fullname: '',
        role: '',
        email: '',
        password: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()   
        fetch("http://localhost:8000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            body: JSON.stringify(formData),
        }).then(() => {
            console.log("new list addes");
        });
    }
    return (
        <PageLayout>
            <form onSubmit={handleSubmit} className="space-y-4">
                <label
                    htmlFor="fullname"
                    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4"
                        placeholder="Full Name"
                        onChange={handleChange}
                    />

                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                        Full Name
                    </span>
                </label>
                <select
                    name="role"
                    id="role"
                    className="w-full p-4 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    onChange={handleChange}
                >
                    <option value="" >Select Role</option>
                    <option value="Role1">Role 1</option>
                    <option value="Role2">Role 2</option>
                </select>
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
                <button type="submit" className="bg-[#666CFF] w-full text-white p-3 rounded-lg">SIGN UP</button>
                <h3 className="text-sm text-gray-500 text-center">Don’t have an account? <Link className="text-[#666CFF]" href={'/'}>Sign In</Link></h3>
            </form>
        </PageLayout>
    )
}

export default signup
