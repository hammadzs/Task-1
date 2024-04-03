const CreateTaskForm = () => {
    return (
        <form className="max-w-screen-2xl m-auto mt-6 space-y-6">
            <div className="flex justify-center items-center gap-x-6">
                <div className="w-full">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                    <input type="text" id="title" name="title" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
                <div className="w-full">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Due Date</label>
                    <input type="date" id="title" name="title" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
            </div>
            <div className="flex justify-center items-center gap-x-6">
                <div className="w-full">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                    <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full">
                        <option selected>Select</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="w-full">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full">
                        <option selected>Select</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center items-center gap-x-6">
                <div className="w-full">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Assignee</label>
                    <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full">
                        <option selected>Select</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="w-full">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <input type="text" id="title" name="title" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:border-gray-600 placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
            </div>
            <div className="w-full text-right">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Task</button>
            </div>
        </form>

    )
}

export default CreateTaskForm
