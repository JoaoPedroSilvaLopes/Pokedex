import './styles.css'
import { useState } from 'react'

import { AboutContent } from '../CardContent/AboutContent'
import { EvolutionContent } from '../CardContent/EvolutionContent'
import { StatsContent } from '../CardContent/StatsContent'


export function CardMain({descricao, tipo, simbolos, height, weight, ability, statsBase, fraquezas, 
    evolucao, sprites}) {

    const [internContent, setInternContent] = useState(
        <AboutContent 
            descricao={descricao} 
            tipo={tipo} 
            simbolos={simbolos} 
            height={height}
            weight={weight}
            ability={ability}
        />
    )

    function setAbout() {
        setInternContent(
            <AboutContent 
                descricao={descricao} 
                tipo={tipo} 
                simbolos={simbolos} 
                height={height}
                weight={weight}
                ability={ability}
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

    function setEvolution() {
        // setInternContent(
        //     <EvolutionContent 
        //         tipo={tipo}
        //         evolucao={evolucao}
        //         sprites={sprites}
        //     />
        // )
    }

    return <main className='mainContent'>
        <div className='buttonContent'>
            <button className="buttonOptions" onClick={ () => setAbout() }>About</button>
            <button className="buttonOptions" onClick={ () => setStats() }>Stats</button>
            <button className="buttonOptions" onClick={ () => setEvolution() }>Evolution</button>
        </div>
        <div className='internContent'>
            {internContent}
        </div>
    </main>
}