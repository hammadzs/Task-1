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
        <header className="p-10 w-full flex justify-between items-center max-h-24">
            <div className="flex-1 flex items-center gap-x-4">
                <button onClick={() => setMenu(!menu)}>
                    <Image
                        src={'/img/menu-bars.svg'}
                        width={100}
                        height={100}
                        alt="Menu Bars"
                        className="max-w-6 w-full"
                    />
                </button>
                <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <button className="bg-[#546FFF] text-white py-2 px-8 rounded-lg" onClick={()=>{
                router.push("/createtask")
            }}>Log Out</button>
        </header>
    )
}

export default Header
