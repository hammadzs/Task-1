import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import TaskTable from '@/components/TaskTable'
import { useRouter } from 'next/router'
const Task = () => {
    const router = useRouter();
    const [menu, setMenu] = useState(true)
    return (
        <main className='flex'>
            <Sidebar menu={menu} />
            <div className='w-full p-10'>
                <Header title="Task" menu={menu} setMenu={setMenu} />
                <div className='m-auto w-full'>
                    <div className="w-full text-right mt-auto">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => router.push('/createtask')}>Create Task</button>
                    </div>
                    <TaskTable />
                </div>
            </div>
        </main>
    )
}

export default Task
