
import { Inter } from "next/font/google";
import SignInFrom from "@/components/SignInFrom";
import PageLayout from "@/components/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <PageLayout>
        <SignInFrom />
      </PageLayout>
    </main>
  );
}
