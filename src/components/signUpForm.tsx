import Link from "next/link"
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useFormik } from 'formik';
import * as Yup from 'yup';


const SignUpForm = () => {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      fullname: '',
      role: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Full Name Required'),
      role: Yup.string()
        .required('Role Required'),
      email: Yup.string().email('Invalid email address').required('Email Required'),
      password: Yup.string()
        .required('Password Required'),
    }),
    onSubmit: async values => {

      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}users`);
      const users = await res.json();
      const user = users.find((u: any) => u.email === values.email);

      if (!user) {
        fetch(`${process.env.NEXT_PUBLIC_PORT}users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
          body: JSON.stringify(values),
        }).then(() => {
          toast.success("User Registers Successfully");
          router.push("/")
        });
      } else {
        toast.error("User Already Registered");
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullname}
        />

        <span
          className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
        >
          Full Name
        </span>
      </label>
      {formik.touched.fullname && formik.errors.fullname ? (
        <div className="text-red-300">{formik.errors.fullname}</div>
      ) : null}
      <select
        name="role"
        id="role"
        className="w-full p-4 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.role}
      >
        <option value="" >Select Role</option>
        <option value="Role1">Role 1</option>
        <option value="Role2">Role 2</option>
      </select>
      {formik.touched.role && formik.errors.role ? (
        <div className="text-red-300">{formik.errors.role}</div>
      ) : null}
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
      <button type="submit" className="bg-[#666CFF] w-full text-white p-3 rounded-lg">SIGN UP</button>
      <h3 className="text-sm text-gray-500 text-center">Don’t have an account? <Link className="text-[#666CFF]" href={'/'}>Sign In</Link></h3>
    </form>
  )
}

export default SignUpForm;
