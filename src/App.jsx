import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'

function App() {
  const [currentWord, setCurrentWord] = useState("react")

  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  console.log(typeof letters);

  const word = Array.from(currentWord).map((letter, index) => (<div key={index} className="hangman-box"><p>{letter.toUpperCase()}</p></div>))
  const keyboard = alphabet.map((letter, index) => (<button key={index} className="keyboard-btn">{letter.toUpperCase()}</button>) )

  return (
    <main>
      <Header/>
      <Status/>
      <Languages/>
      <section className="hangman-word">{word}</section>
      <section className="flex-wrapper">{keyboard}</section>
      <button className="new-game-btn">New Game</button>
    </main>
  )
}

export default App
