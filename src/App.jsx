import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'

function App() {
  return (
    <main>
      <Header/>
      <Status/>
      <Languages/>
    </main>
  )
}

export default App
