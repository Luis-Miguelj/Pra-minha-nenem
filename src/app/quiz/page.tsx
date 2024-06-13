'use client'
import Link from "next/link";
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Quiz() {

  const [resposta, setResposta] = useState('')
  const [padding, setPadding] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined' || typeof document !== 'undefined') {
      const btn1 = document.getElementById('btn1')
      const btn2 = document.getElementById('btn2')
      const btn3 = document.getElementById('btn3')
      const btn4 = document.getElementById('btn4')

      btn1?.addEventListener('click', () => {
        setResposta('Não é essa a resposta, mas sei que sou mt fofo :)')
        setPadding('p-1')
      })
      btn2?.addEventListener('click', () => {
        setResposta('Errou de novo amor, mas sou o cara mais feliz do mundo por ser teu amor S2')
        setPadding('p-1')
      })
      btn3?.addEventListener('click', () => {
        setResposta('Infelizmente, essa também não é a resposta amor. Contudo, Tu também é o amor da minha vida S2')
        setPadding('p-1')
      })
      btn4?.addEventListener('click', () => {
        setResposta('Acertoooooouuuu!!! Sou teu coisinha chata, e vou te irritar patodavida! Eu te amo mil milhões, minha princesa S2!')
        setPadding('p-1')
      })

    }
  })


  return (
    <main className="min-h-[90vh] w-full md:min-h-[100vh] flex justify-center items-center px-10 text-white">
      <div className="w-full h-96 md:w-1/2 bg-zinc-950 backdrop-blur-sm bg-opacity-50 rounded shadow p-5">
        <div className="container flex flex-col gap-6">
          <h1 className="text-md font-semibold text-center">O que eu sou pra você?</h1>
          <div className="flex flex-col gap-2">
            <button id="btn1" className="font-semibold p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" >Namorado mais fofo</button>
            <button id="btn2" className="font-semibold p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" >Meu amor</button>
            <button id="btn3" className="font-semibold p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" >Amor da minha vida</button>
            <button id="btn4" className="font-semibold p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" >Meu coisinha chata, bobo</button>
          </div>
          <div className="container h-8 flex items-center justify-center text-sm">
            <h1 className={`w-full text-center bg-violet-600 font-semibold ${padding} rounded`}>{resposta}</h1>
          </div>
          <div className="container flex justify-end items-center">
            <Link className="p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" href={'/quiz-2'}><ArrowRight /></Link>
          </div>
        </div>
      </div>
    </main>
  )
}