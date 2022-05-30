import './styles.css'
import { useState } from 'react'

import { Button } from '../../BasicComponents/Button'

import { AboutContent } from '../CardContent/AboutContent'
import { EvolutionContent } from '../CardContent/EvolutionContent'
import { StatsContent } from '../CardContent/StatsContent'


export function CardMain({descricao, tipo, simbolos, statsBase, evolucao, sprites}) {

    const [internContent, setInternContent] = useState(
        <AboutContent 
            descricao={descricao} 
            tipo={tipo} 
            simbolos={simbolos} 
        />
    )

    function setAbout() {
        setInternContent(
            <AboutContent 
                descricao={descricao} 
                tipo={tipo} 
                simbolos={simbolos} 
            />
        )
    }

    function setStats() {
        setInternContent(
            <StatsContent 
                statsBase={statsBase} 
                tipo={tipo}
            />
        )
    }

    function setEvolution() {
        setInternContent(
            <EvolutionContent 
                tipo={tipo}
                evolucao={evolucao}
                sprites={sprites}
            />
        )
    }

    return <main className='mainContent'>
        <div className='buttonContent'>
            <button onClick={ () => setAbout() }>Sobre</button>
            <button onClick={ () => setStats() }>Stats</button>
            <button onClick={ () => setEvolution() }>Evolução</button>
        </div>
        <div className='internContent'>
            {internContent}
        </div>
    </main>
}