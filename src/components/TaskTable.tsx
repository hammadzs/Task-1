import Image from 'next/image'
import React, { useEffect, useState } from 'react'


export default function TaskTable() {
    const [tasks, setTasks] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:8000/tasks`);
                const data = await res.json();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="rounded-lg border border-gray-200 shadow-lg mt-10">
            <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap p-6 font-medium text-gray-900 text-left">Name</th>
                            <th className="whitespace-nowrap p-6 font-medium text-gray-900 text-left">Due Date</th>
                            <th className="whitespace-nowrap p-6 font-medium text-gray-900 text-left">Assignee</th>
                            <th className="whitespace-nowrap p-6 font-medium text-gray-900 text-left">Priority</th>
                            <th className="whitespace-nowrap p-6 font-medium text-gray-900 text-left">Status</th>
                            <th className="whitespace-nowrap p-6 font-medium text-gray-900 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            tasks && tasks.map((item: any, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap p-6 font-medium text-gray-900">{item.title}</td>
                                        <td className="whitespace-nowrap p-6 text-gray-700">{item.date}</td>
                                        <td className="whitespace-nowrap p-6 text-gray-700">{item.assignee}</td>
                                        <td className="whitespace-nowrap p-6 text-gray-700">{item.priority}</td>
                                        <td className="whitespace-nowrap p-6 text-gray-700">{item.status}</td>
                                        <td className="whitespace-nowrap p-6 text-gray-700">
                                            <Image
                                                src={'/img/delete-icon.svg'}
                                                width={20}
                                                height={20}
                                                alt='Delete Icon'
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
