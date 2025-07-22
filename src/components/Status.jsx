import React from 'react'
import { clsx } from 'clsx';

const Status = ({gameWon, gameLost}) => {
  const status = clsx("status-div",gameWon && "green", gameLost && "red")
  return (
    <div className={status}>
      
      <h2>{gameWon ? "You win!" : gameLost ? "Game over!" : ""}</h2>
      <h2>{gameWon ? "Well done! 🎉"  : gameLost ? "You lose! Better start learning Assembly 😭" : ""}</h2>
    </div>
  )
}

export default Status
