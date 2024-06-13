import { Heart } from 'lucide-react'
export default function Home() {
  return (
    <main className="w-full h-[90vh] md:min-h-[100vh] flex justify-center items-center text-white px-10">
      <div className="h-96 bg-zinc-950 w-full md:w-1/2 p-5 flex flex-col gap-5 rounded-md shadow backdrop-blur-sm bg-opacity-50 overflow-hidden break-words">
        <h1 className="text-md font-semibold">Site dedicado a minha neném</h1>
        <div className="flex flex-col gap-1">
          <p>
            Site desenvolvido com Next.js, Tailwind CSS e TypeScript. No intuito de encher o saco da minha neném.
          </p>
          <p>Falando coisas bobas, com quizes e outras coisas.</p>
        </div>
        <div className='container h-full flex justify-center items-center'>
          <Heart size={150} className='text-red-500' />
        </div>
      </div>
    </main>
  );
}
