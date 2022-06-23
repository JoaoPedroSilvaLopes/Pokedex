import './styles.css'
import { useState } from 'react'

import { AboutContent } from '../CardContent/AboutContent'
import { EvolutionContent } from '../CardContent/EvolutionContent'
import { StatsContent } from '../CardContent/StatsContent'


export function CardMain({descricao, tipo, simbolos, statsBase, evolucao, sprites, fraquezas}) {

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
                fraquezas={fraquezas}
            />
        )
    }

    // function setEvolution() {
    //     setInternContent(
    //         <EvolutionContent 
    //             tipo={tipo}
    //             evolucao={evolucao}
    //             sprites={sprites}
    //         />
    //     )
    // }

    return <main className='mainContent'>
        <div className='buttonContent'>
            <button className="buttonOptions" onClick={ () => setAbout() }>Sobre</button>
            <button className="buttonOptions" onClick={ () => setStats() }>Stats</button>
            {/* <button className="buttonOptions" onClick={ () => setEvolution() }>Evolução</button> */}
        </div>
        <div className='internContent'>
            {internContent}
        </div>
    </main>
}