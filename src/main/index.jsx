import React from 'react'
import ReactDOM from 'react-dom/client'

import { Pokedex } from '../pokedex'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h1 className='titulo'>POKEDEX</h1>
    <div className='scroll'>
      <Pokedex />
    </div>
  </> 
)