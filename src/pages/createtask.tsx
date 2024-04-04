import CreateTaskForm from '@/components/CreateTaskForm'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'

const createtask = () => {
  const [menu, setMenu] = useState(true)
  return (
    <main className='flex'>
      <Sidebar menu={menu} />
      <div className='w-full'>
        <Header title="Create New  Task" menu={menu} setMenu={setMenu} />
        <CreateTaskForm />
      </div>
    </main>
  )
}

export default createtask
