// import { useState } from "react"
import { useAtom } from 'jotai'
import { scoreState } from '../utils/scoreState.js'

export default function Score() {
  const [score, setScore] = useAtom(scoreState)
  console.log('score component re-render')

  function clearScore(setScore) {
    const confirm = window.confirm('Tem certeza que quer apagar a pontuação?')
    if (confirm) {
      setScore(0)
    }
  }

  return (
    <span onDoubleClick={() => clearScore(setScore)} onClick={() => setScore(prev => prev + 1)} className="text-center">
      <span className="text-scoreText tracking-widest">SCORE</span>
      <h2 className="text-darkText text-6xl font-bold" id="score">{score}</h2>
    </span>
  )
}

