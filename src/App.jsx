import { useState } from 'react'
import './index.css'
import { clsx } from 'clsx';
import Header from './components/Header'
// import Status from './components/Status'
import Languages from './components/Languages'
import { languages } from './data/languages'
import { getFarewellText } from './data/farewells'

console.log(getFarewellText)
function App() {
  const [currentWord, setCurrentWord] = useState("re")
  const [guessedLetters, setGuessedLetters] = useState([])

  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  // DERIVED STATE
  const countWrongGuesses = () => {
    return guessedLetters.filter(letter => !currentWord.includes(letter)).length //you can filter an array, would you do it the other way around aka filter currentWord, do .split("") before .filter
  } //the filter filters fwd only the wrong letters in an array, as filter always returns an array, .length then gives us nr of items in the array, do not forget return!

  const gameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const gameLost = countWrongGuesses() > languages.length -1
  const gameOver = gameWon || gameLost 
 

  const saveGuessedLetter = (letter) => {
    setGuessedLetters(prevGuessed => (
     prevGuessed.includes(letter) ? prevGuessed : [...prevGuessed, letter]
    ))
  }

  const keyboard = alphabet.map((letter, index) => { 
    const colorClass = clsx(
      "keyboard-btn",
      {
      green: guessedLetters.includes(letter) && currentWord.includes(letter), //here green red and yellow are the css variables
      red: guessedLetters.includes(letter) && !currentWord.includes(letter),
      yellow: !guessedLetters.includes(letter), // default
    })

    // console.log("color class",colorClass)
    return ( 
    //<button key={index} className={`keyboard-btn ${guessedLetters.includes(letter) && currentWord.includes(letter) ? "green" : guessedLetters.includes(letter) && !currentWord.includes(letter) ? "red" : "yellow"}`} onClick={() => saveGuessedLetter(letter)} >{letter.toUpperCase()}</button>) 
    //<button key={index} className={clsx("keyboard-btn",guessedLetters.includes(letter) && currentWord.includes(letter) && "green", guessedLetters.includes(letter) && !currentWord.includes(letter) && "red", "yellow")} onClick={() => saveGuessedLetter(letter)} >{letter.toUpperCase()}</button>) 
    // If the letter is guessed and is part of the mystery word | if the letter is guessed but is not in the mystery world | if not guessed yet
    <button 
    key={index} 
    className={colorClass}  
    onClick={() => saveGuessedLetter(letter)}  
    disabled={guessedLetters.includes(letter) || gameOver}
    aria-label={`letter. ${letter}`}
    aria-disabled={guessedLetters.includes(letter)}
    >
      {letter.toUpperCase()}</button>) //important with the onClick here so the component rerenders and color updates!

  }) 

  const word = Array.from(currentWord).map((letter, index) => (<div key={index} className="hangman-box"><p>{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</p></div>))

  const statusCSS = clsx("status-div", {
    green: gameWon,
    red: gameLost,
    purple: !gameOver && countWrongGuesses() !== 0
  })

  const renderStatus = (languages) => {
    if (!gameOver) {
      if (countWrongGuesses() !== 0) {//when you play and guessed at least once aka not start screen (you do not want a message there)
        const deleteIndex = countWrongGuesses() - 1
        const language = languages[deleteIndex].name
        return (      
          <h2>{getFarewellText(language)}</h2>
      )
      }

      return null //fallback for error handling
    }

    if(gameWon){
      return (      
        <>
          <h2>You win!</h2>
          <h2>Well done! 🎉</h2>
        </>
      )
    } if(gameOver){
      return (
        <>
          <h2>Game over! You lose!</h2>
          <h2>Better start learning Assembly 😭</h2>
        </>
      )
    }
  }

  return (
    <main>
      <Header/>
      {/* <Status gameWon={gameWon} gameLost={gameLost}/> */}
      <div className={statusCSS}>{renderStatus(languages)}</div>
      <Languages languages={languages} countWrongGuesses = {countWrongGuesses}/>
      <section className="hangman-word">{word}</section>
      <section className="flex-wrapper">{keyboard}</section>
      {gameOver && <button className="new-game-btn">New Game</button>}
    </main>
  )
}

export default App
