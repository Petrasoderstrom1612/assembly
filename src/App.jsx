import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'

function App() {
  const [currentWord, setCurrentWord] = useState("react")

  const word = Array.from(currentWord).map((letter, index) => (<div key={index} className="hangman-box"><p>{letter.toUpperCase()}</p></div>))
  return (
    <main>
      <Header/>
      <Status/>
      <Languages/>
      <section className="hangman-word">{word}</section>
    </main>
  )
}

export default App
