import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Sidebar {
    menu: boolean
}

const Sidebar: React.FC<Sidebar> = ({ menu }) => {
    return (
        <section className={`relative w-full h-screen ${menu ? 'md:max-w-[250px]' : "md:max-w-[128px]"}`}>
            <div className="flex justify-center items-center gap-x-3 py-10">
                <Image
                    src={'/img/book-square.svg'}
                    width={100}
                    height={100}
                    alt="Logo"
                    className="max-w-16 w-full"
                />
                <h2 className={`text-3xl font-semibold ${menu ? "block" : "hidden"}`}>Taska</h2>
            </div>
            <div className='py-10'>
                <Link href={'/task'} className="flex justify-center items-center gap-x-3 ">
                    <Image
                        src={'/img/book.svg'}
                        width={100}
                        height={100}
                        alt="Logo"
                        className="max-w-6 w-full"
                    />
                    <h2 className={`text-base font-semibold ${menu ? "block" : "hidden"}`}>Task</h2>
                </Link>
            </div>
        </section>
    )
}

export default Sidebar
