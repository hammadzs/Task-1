import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const CreateTaskForm = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            title: '',
            date: '',
            priority: '',
            status: '',
            assignee: '',
            desc: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Task Title Required'),
            date: Yup.date()
                .required('Due Date Required'),
            priority: Yup.string().required('Priority Required'),
            status: Yup.string()
                .required('Status Required'),
            assignee: Yup.string()
                .required('Status Required'),
            desc: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Status Required'),
        }),
        onSubmit: async values => {
            fetch("http://localhost:8000/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                mode: "cors",
                body: JSON.stringify(values),
            }).then(() => {
                toast.success("Task Created Successfully");
                router.push("/task")
            }).catch((err) => {
                toast.error(err.message);
            })
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="max-w-screen-2xl flex flex-col m-auto mt-6 gap-y-6 max-h-96 h-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-6">
                <div className="w-full">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                    <input type="text" id="title" name="title" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task Title" required onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title} />
                    {formik.touched.title && formik.errors.title ? (
                        <div className="text-red-300">{formik.errors.title}</div>
                    ) : null}
                </div>
                <div className="w-full">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Due Date</label>
                    <input type="date" id="date" name="date" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date} />
                    {formik.touched.date && formik.errors.date ? (
                        <div className="text-red-300">{formik.errors.date}</div>
                    ) : null}
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-6">
                <div className="w-full">
                    <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                    <select id="priority" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.priority}>
                        <option disabled>Select</option>
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
                    {formik.touched.priority && formik.errors.priority ? (
                        <div className="text-red-300">{formik.errors.priority}</div>
                    ) : null}
                </div>
                <div className="w-full">
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <select id="status" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.status}>
                        <option disabled>Select</option>
                        <option value="Pending">Pending</option>
                        <option value="Active">Active</option>
                        <option value="Closed">Closed</option>
                    </select>
                    {formik.touched.status && formik.errors.status ? (
                        <div className="text-red-300">{formik.errors.status}</div>
                    ) : null}
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-6">
                <div className="w-full">
                    <label htmlFor="assignee" className="block mb-2 text-sm font-medium text-gray-900">Assignee</label>
                    <select id="assignee" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.assignee}>
                        <option disabled>Select</option>
                        <option value="Syed Muqarrab">Syed Muqarrab</option>
                        <option value="Saud Haris">Saud Haris</option>
                        <option value="Saeed">Saeed</option>
                    </select>
                    {formik.touched.assignee && formik.errors.assignee ? (
                        <div className="text-red-300">{formik.errors.assignee}</div>
                    ) : null}
                </div>

                <div className="w-full">
                    <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <input type="text" id="desc" name="desc" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.desc} />
                    {formik.touched.desc && formik.errors.desc ? (
                        <div className="text-red-300">{formik.errors.desc}</div>
                    ) : null}
                </div>
            </div>
            <div className="w-full text-right mt-auto">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Task</button>
            </div>
        </form>

    )
}

export default CreateTaskForm;
