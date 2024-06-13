'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Quiz2() {
  const [resposta, setResposta] = useState('')
  const [padding, setPadding] = useState('')
  const [validate, setValidate] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' || typeof document !== 'undefined') {
      const btn1 = document.getElementById('btn1')
      const btn2 = document.getElementById('btn2')
      const btn3 = document.getElementById('btn3')
      const btn4 = document.getElementById('btn4')

      btn1?.addEventListener('click', () => {
        setResposta('Eu realmete acho teus olhos lindos, mas não é essa a resposta. Eu te amo muito, minha princesa S2')
        setPadding('p-1')
      })
      btn2?.addEventListener('click', () => {
        setResposta('Amor, não sei se tu achou que essa era a certa, mas não é kkkkkkk. mas 👀')
        setPadding('p-1')
      })
      btn3?.addEventListener('click', () => {
        setResposta('Seu sorriso é incrivel, é tão brilhante quanto os raios do sol, mas não é essa a resposta.')
        setPadding('p-1')
      })
      btn4?.addEventListener('click', () => {
        setResposta('E de nov vc não acertou amor :(, sua fofura é imensuravel, mas recomendo tu clicar no "ajuda" no lado esquerdo/embaixo na tela.')
        setPadding('p-1')
      })
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined' || typeof document !== 'undefined') {
      const ajuda = document.getElementById('ajuda')

      ajuda?.addEventListener('click', () => {
        alert('Amor, tu é a garota mais incrivel do mundo, tu é gentil, carismatica, é a garota mais linda do mundo, a pergunta nessa pagina é "Sabe o que eu acho mais lindo em vc?", bom eu não consigo escolher algo especifico, eu adoro tudo em vc, te acho perfeita, quando eu olho pra vc, tudo em volta muda, algumas vezes sinto o tempo parar, não sei explicar, ali em baixo comentei que as respostas estavam errados, mas nenhuma está, contudo, elas são incompletas. Eu adoro tudo em vc e admiro sua força e coragem, isso me motiva muitas vezes e pensar em vc me anima, vc é uma das razões do meu viver, tu sempre consegue tirar o meu sorriso mais sincero, e eu te amo muito, amor, eu te amo mil milhões! S2')
      })
    }
  }, [validate])


  return (
    <main className="min-h-[90vh] w-full md:min-h-[100vh] flex justify-center items-center px-10 text-white">
      <button id='ajuda' className="font-semibold p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all absolute bottom-5 right-5" onClick={() => {
        if (validate) {
          setValidate(false)
        } else {
          setValidate(true)
        }
      }}>Ajuda</button>
      <div className="w-full h-96 md:w-1/2 bg-zinc-950 backdrop-blur-sm bg-opacity-50 rounded shadow p-5">
        <div className="container flex flex-col gap-6">
          <h1 className="text-md font-semibold text-center">Sabe o que eu acho mais lindo em vc?</h1>
          <div className="flex flex-col gap-2">
            <button id="btn1" className="font-semibold p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" >Seus olhos</button>
            <button id="btn2" className="font-semibold p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" >Sua bunda</button>
            <button id="btn3" className="font-semibold p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" >Seu sorriso</button>
            <button id="btn4" className="font-semibold p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" >Sua fofura</button>
          </div>
          <div className="container h-8 flex items-center justify-center text-sm">
            <h1 className={`w-full text-center bg-violet-600 font-semibold ${padding} rounded`}>{resposta}</h1>
          </div>
          <div className="container flex justify-between items-center">
            <Link className="p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" href={'/quiz'}><ArrowLeft /></Link>
            <Link className="p-2 bg-violet-600 rounded hover:bg-violet-400 transition-all" href={'/quiz-3'}><ArrowRight /></Link>
          </div>
        </div>
      </div>
    </main>
  )
}