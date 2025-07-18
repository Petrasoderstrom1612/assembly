import { useState } from 'react'
import './index.css'
import { clsx } from 'clsx';
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'

function App() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])

  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  const saveGuessedLetter = (letter) => {
    setGuessedLetters(prevGuessed => (
     prevGuessed.includes(letter) ? prevGuessed : [...prevGuessed, letter]
    ))
  }
  const keyboard = alphabet.map((letter, index) => { 
    const colorClass = clsx(
      "keyboard-btn",
      {
      green: guessedLetters.includes(letter) && currentWord.includes(letter),
      red: guessedLetters.includes(letter) && !currentWord.includes(letter),
      yellow: !guessedLetters.includes(letter), // default
    })
    return ( 
    //<button key={index} className={`keyboard-btn ${guessedLetters.includes(letter) && currentWord.includes(letter) ? "green" : guessedLetters.includes(letter) && !currentWord.includes(letter) ? "red" : "yellow"}`} onClick={() => saveGuessedLetter(letter)} >{letter.toUpperCase()}</button>) 
    //<button key={index} className={clsx("keyboard-btn",guessedLetters.includes(letter) && currentWord.includes(letter) && "green", guessedLetters.includes(letter) && !currentWord.includes(letter) && "red", "yellow")} onClick={() => saveGuessedLetter(letter)} >{letter.toUpperCase()}</button>) 
    // If the letter is guessed and is part of the mystery word | if the letter is guessed but is not in the mystery world | if not guessed yet
    <button key={index} className={colorClass} onClick={() => saveGuessedLetter(letter)}>{letter.toUpperCase()}</button>) //important with the onClick here so the component rerenders and color updates!

  }) 
  const word = Array.from(currentWord).map((letter, index) => (<div key={index} className="hangman-box"><p>{letter.toUpperCase()}</p></div>))


  console.log(guessedLetters)

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
