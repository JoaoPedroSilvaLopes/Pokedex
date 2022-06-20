import React from 'react'
import ReactDOM from 'react-dom/client'

import { Card } from '../card'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <h1 className='titulo'>POKEDEX</h1>
        <div className='scroll'>
            <Card />
        </div>
    </React.StrictMode>
)