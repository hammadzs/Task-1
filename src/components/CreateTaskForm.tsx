import { useRouter } from "next/router"
import { RiFlag2Fill } from "react-icons/ri";
const CreateTaskForm = () => {
    const router = useRouter();
    return (
        <form className="max-w-screen-2xl flex flex-col m-auto mt-6 gap-y-6 max-h-96 h-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-6">
                <div className="w-full">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                    <input type="text" id="title" name="title" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task Title" required />
                </div>
                <div className="w-full">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Due Date</label>
                    <input type="date" id="title" name="title" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-6">
                <div className="w-full">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                    <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full">
                        <option selected>Select</option>
                        <option value="Low">
                            <div>
                                <RiFlag2Fill />
                            </div>
                            <span>Low</span>
                        </option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="w-full">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full">
                        <option selected>Select</option>
                        <option value="Pending">Pending</option>
                        <option value="Active">Active</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-6">
                <div className="w-full">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Assignee</label>
                    <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full">
                        <option selected>Select</option>
                        <option value="Syed Muqarrab">Syed Muqarrab</option>
                        <option value="Saud Haris">Saud Haris</option>
                        <option value="Saeed">Saeed</option>
                    </select>
                </div>
                <div className="w-full">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <input type="text" id="title" name="title" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required />
                </div>
            </div>
            <div className="w-full text-right mt-auto">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => router.push('/task')}>Create Task</button>
            </div>
        </form>

    )
}

export default CreateTaskForm
