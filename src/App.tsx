import { useState } from 'react'
import './App.css'
import { Accordion } from './components'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Accordion title='Nashe'>
        <h3>Hola papu</h3>
      </Accordion>
      
      <button>
        
      </button>
    </>
  )
}

export default App
