import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const createtask = () => {
  return (
    <main className='flex'>
      <Sidebar />
      <Header title="Create New  Task" />
    </main>
  )
}

export default createtask
