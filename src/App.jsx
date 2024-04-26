import { useState } from 'react'
import './App.css'
import Current from './components/Current';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Current />
    </>
  )
}

export default App
