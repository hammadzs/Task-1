import Image from "next/image";
import { ReactNode } from "react";
interface PageProps {
    children: ReactNode
}
const PageLayout = ({ children }: PageProps) => {
    return (
        <div className=" max-w-[450px] w-full">
            <div className="shadow-lg px-6 py-8 space-y-6 z-10">
                <div className="flex justify-center items-center gap-x-2">
                    <Image
                        src={'/img/logo.png'}
                        width={400}
                        height={400}
                        alt="Logo"
                        className="max-w-10 w-full"
                    />
                    <h2 className="text-3xl font-semibold">Taska</h2>
                </div>
                <h1 className="text-2xl font-semibold text-[#4C4E64DE] rounded-xl">Welcome to Taska! 👋🏻</h1>
                {children}
            </div>
            <Image
                src={'/img/Frame.png'}
                width={500}
                height={500}
                alt="Frame Image"
                className="max-w-full w-full absolute left-0 bottom-0 z-[-1]"
            />
        </div>
    )
}

export default PageLayout
