import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className="shadow-lg ">
        <h1>
          <Image
            src={'/img/logo.png'}          
            width={400}
            height={400}
            alt="Logo"
            className="max-w-10 w-full"
          />
        </h1>
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
