import React from 'react'
import { languages } from "../data/languages"

const Languages = () => {
    const languageBoxes = languages.map(box => <div className="box-div" key={box.name} style={{backgroundColor: box.backgroundColor}}><p  style={{color: box.color}}className="box-p">{box.name}</p></div>)

  return (
    <section className="languages">
        {languageBoxes}
    </section>
  )
}

export default Languages
