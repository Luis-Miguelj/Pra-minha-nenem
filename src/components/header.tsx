'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const path = usePathname()
  return (
    <header className="w-full h-20 bg-zinc-950 fixed">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-5">
        <Link href={'/'} className="text-2xl bg-gradient-to-r from-violet-600 via-violet-400 to-violet-200 bg-clip-text text-transparent font-semibold">Pra minha neném</Link>
        <div>
          {
            path === '/' && (
              <Link href={'/quiz'} className="bg-violet-600 text-white p-2 font-semibold hover:bg-violet-500 text-sm transition-all rounded">Entrar</Link>
            )
          }
        </div>
      </div>
    </header>
  )
}