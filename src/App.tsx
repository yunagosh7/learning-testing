import { useState } from 'react'
import './App.css'
import { Accordion } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordion title='Nashe'>
        <h3>Hola papu</h3>
     </Accordion>
    </>
  )
}

export default App
