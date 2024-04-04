import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


export default function TaskTable() {
    const [tasks, setTasks] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}tasks`);
                const data = await res.json();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData();
    }, []);
    const handleDelete = (id: number) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        fetch(`${process.env.NEXT_PUBLIC_PORT}tasks/` + id, {
            method: "DELETE",
        }).then(() => {
            toast.success("Task Deleted Successfully");
        }).catch((err) => {
            toast.error(err.message);
        })
    };
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
                                        <td className="whitespace-nowrap p-6 font-semibold text-[#546FFF]">{item.title}</td>
                                        <td className="whitespace-nowrap p-6 text-black">{item.date}</td>
                                        <td className="whitespace-nowrap p-6 text-black">{item.assignee}</td>
                                        <td className="whitespace-nowrap p-6 text-black flex items-center gap-x-3">
                                            {
                                                item.priority === "Low" ? (
                                                    <Image
                                                        src={'/img/yellow-flag.svg'}
                                                        width={14}
                                                        height={14}
                                                        alt='Yellow Flag'
                                                    />
                                                ) : item.priority === "Normal" ? (
                                                    (
                                                        <Image
                                                            src={'/img/red-flag.svg'}
                                                            width={14}
                                                            height={14}
                                                            alt='Yellow Flag'
                                                        />
                                                    )
                                                ) : (
                                                    (
                                                        <Image
                                                            src={'/img/green-flag.svg'}
                                                            width={14}
                                                            height={14}
                                                            alt='Yellow Flag'
                                                        />
                                                    )
                                                )
                                            }
                                            {item.priority}
                                        </td>
                                        <td className={`whitespace-nowrap p-6 text-white`}>
                                            <span className={`p-2 rounded ${item.status === "Pending" ? "bg-[#FFB72B]" : item.status === "Active" ? "bg-[#75D653]" : "bg-[#F25353]"
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap p-6 text-gray-700">
                                            <button onClick={() => handleDelete(item.id)}>
                                                <Image
                                                    src={'/img/delete-icon.svg'}
                                                    width={20}
                                                    height={20}
                                                    alt='Delete Icon'
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}
