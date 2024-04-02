import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="h-screen">
      <Component {...pageProps} />
      <Toaster />
    </main>
  )
}
