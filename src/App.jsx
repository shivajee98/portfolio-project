import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Banner />
    </>
  )
}

export default App
