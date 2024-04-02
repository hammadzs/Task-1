import Image from "next/image";
import { Inter } from "next/font/google";
import SignInFrom from "@/components/SignInFrom";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className="shadow-lg max-w-[450px] w-full p-4 space-y-4">
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
        <SignInFrom />
      </div>
      <Image
        src={'/img/Frame.png'}
        width={500}
        height={500}
        alt="Frame Image"
        className="max-w-full w-full absolute left-0 bottom-0"
      />
    </main>
  );
}
