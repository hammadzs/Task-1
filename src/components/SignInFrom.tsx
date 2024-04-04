import Link from "next/link"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const SignInFrom = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email Required'),
      password: Yup.string()
        .required('Password Required'),
    }),
    onSubmit: async values => {
      const res = await fetch("http://localhost:8000/users/");
      const users = await res.json();
      const user = users.find((u: any) => u.email === values.email);

      if (!user) {
        toast.error("Invalid Email Address");
      } else if (user.password !== values.password) {
        toast.error("Invalid Password");
      } else {
        toast.success("Login Successfully");
        router.push("/task")
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        <span
          className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
        >
          Email
        </span>
      </label>
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-300">{formik.errors.email}</div>
      ) : null}
      <label
        htmlFor="password"
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="password"
          id="password"
          name="password"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4"
          placeholder="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />

        <span
          className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
        >
          Password
        </span>
      </label>
      {formik.touched.password && formik.errors.password ? (
        <div className="text-red-300">{formik.errors.password}</div>
      ) : null}
      <button type="submit" className="bg-[#666CFF] w-full text-white p-3 rounded-lg">LOGIN</button>
      <h3 className="text-sm text-gray-500 text-center">Don’t have an account? <Link className="text-[#666CFF]" href={'/signup'}>Sign Up</Link></h3>
    </form>
  )
}

export default SignInFrom
