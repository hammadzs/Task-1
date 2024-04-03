import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
const task = () => {
    const [menu, setMenu] = useState(true)
    return (
        <main className='flex'>
            <Sidebar menu={menu} />
            <div className='w-full'>
                <Header title="Task" menu={menu} setMenu={setMenu} />
            </div>
        </main>
    )
}

export default task
