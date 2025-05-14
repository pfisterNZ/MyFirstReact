import { useState } from 'react'
import './App.css'
import {Navbar} from './components/Navbar.jsx'
import { Feed } from './components/Feed.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appContainer'>
      <Feed/>
      <Navbar />
    </div>
  )
}

export default App
