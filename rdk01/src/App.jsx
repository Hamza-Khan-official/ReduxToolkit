import { useState } from 'react'
import './App.css'
import Counter from './Store/Components/Counter'
import User from './Store/Components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      <User />
    </>
  )
}

export default App
