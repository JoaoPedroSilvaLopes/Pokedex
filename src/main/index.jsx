import React from 'react'
import ReactDOM from 'react-dom/client'

import { Card } from '../card'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <h1 className='titulo'>POKEDEX</h1>
        <div className='scroll'>
            <button className='botao'>
                <img src="../pictures/setaEsquerda.png" width='70%' height='auto' alt="Scroll Left"/>
            </button>
            <Card />
            <button className='botao'>
                <img src="../pictures/setaDireita.png" width='70%' height='auto' alt="Scroll Right"/>
            </button>
        </div>
    </React.StrictMode>
)

// onClick={'handleClickLeft()'}
// onClick={'handleClickRight()'}