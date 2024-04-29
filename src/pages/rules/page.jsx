import Header from '@/components/Header';
import Image from "next/image";

export const metadata = {
  title: "Rules",
  description: "Rules page",
}




export default function Rules() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header/>

      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Rules</h1>

       

      </div>
    </main>
  );
}