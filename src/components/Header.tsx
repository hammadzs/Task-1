import Image from "next/image"
import { useRouter } from "next/router"
import { SetStateAction } from "react"

interface header {
    title: string
    menu: boolean
    setMenu: React.Dispatch<SetStateAction<boolean>>
}

const Header: React.FC<header> = ({ title, setMenu, menu }) => {
    const router = useRouter();
    return (
        <header className="pb-6 md:pb-10 w-full flex justify-between  items-center max-h-24">
            <div className="flex-1 flex items-center justify-between md:justify-start gap-x-4">
                <Image
                    onClick={() => router.push("/task")}
                    src={'/img/book-square.svg'}
                    width={50}
                    height={50}
                    alt="Menu Bars"
                    className="md:hidden cursor-pointer"
                />
                <button onClick={() => setMenu(!menu)} className="order-2 md:order-1">
                    <Image
                        src={'/img/menu-bars.svg'}
                        width={100}
                        height={100}
                        alt="Menu Bars"
                        className="max-w-6 w-full"
                    />
                </button>
                <h2 className="text-2xl font-semibold order-1 md:order-2">{title}</h2>
            </div>
            <button className="hidden md:block bg-[#546FFF] hover:bg-blue-700 text-white py-2 px-8 rounded-lg" onClick={() => {
                localStorage.removeItem('user');
                router.push("/")
            }}>Log Out</button>
        </header>
    )
}

export default Header
