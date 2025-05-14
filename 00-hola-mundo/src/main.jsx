// File: src/main.jsx
// Project: 00-hola-mundo
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  
  <section className='App'>
    <TwitterFollowCard 
      userName={"pfisterNz"} 
      name={"Nazareno Pfister"}
    />

    <TwitterFollowCard 
      userName={"miduDev"} 
      name={"Miguel Ángel Durán"}
      isFollowing={true}
    />

    <TwitterFollowCard 
      userName={"elonmusk"} 
      name={"Elon Musk"}
    />

  </section>
)
