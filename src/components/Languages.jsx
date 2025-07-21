import React from 'react'
import { languages } from "../data/languages"

const Languages = ({countWrongGuesses}) => {
    const languageBoxes = languages.map((box, index) => <div className={`box-div ${index < countWrongGuesses() && "lost"}`} key={box.name} style={{backgroundColor: box.backgroundColor}}><p  style={{color: box.color}}className="box-p">{box.name}</p></div>)

  return (
    <section className="flex-wrapper">
        {languageBoxes}
    </section>
  )
}

export default Languages
