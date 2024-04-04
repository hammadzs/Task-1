import CreateTaskForm from '@/components/CreateTaskForm'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/router'
import React, { useLayoutEffect, useState } from 'react'

const Createtask = () => {
  const router = useRouter()
  const [menu, setMenu] = useState(true)
  useLayoutEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/")
    }
  }, [])
  return (
    <main className='flex'>
      <Sidebar menu={menu} />
      <div className='w-full p-10'>
        <Header title="Create New  Task" menu={menu} setMenu={setMenu} />
        <CreateTaskForm />
      </div>
    </main>
  )
}

export default Createtask
