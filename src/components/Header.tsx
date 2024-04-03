import Image from "next/image"

interface header {
    title: string
}

const Header: React.FC<header> = ({ title }) => {
    return (
        <header className="px-10 w-full flex justify-between items-center max-h-24">
            <div className="flex-1 flex items-center gap-x-4">
                <Image
                    src={'/img/menu-bars.svg'}
                    width={100}
                    height={100}
                    alt="Menu Bars"
                    className="max-w-6 w-full"
                />
                <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <button className="bg-[#546FFF] text-white py-2 px-8 rounded-lg">Log Out</button>
        </header>
    )
}

export default Header
