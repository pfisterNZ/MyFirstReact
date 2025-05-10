// File: src/main.jsx
// Project: 00-hola-mundo
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>

    <TwitterFollowCard userName={"pfisternz"} name={"Nazareno Pfister"} />
    <br />
    <TwitterFollowCard userName={"pfisternz"} name={"Nazareno Pfister"} />

  </>
)
