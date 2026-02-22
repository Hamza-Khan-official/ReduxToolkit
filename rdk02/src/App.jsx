import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './screens/Counter'
import Product from './screens/Product'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/counter' Component={Counter} />
        <Route path='/product' Component={Product} />
      </Routes>
    </>
  )
}

export default App
