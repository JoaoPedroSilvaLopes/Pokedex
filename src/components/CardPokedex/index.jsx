import './styles.css';

import { CardHeader } from '../CardEstructure/CardHeader'
import { CardMain } from '../CardEstructure/CardMain'

export function CardPokedex({numeroPokedex, simbolos, sprites, tipo, especie, descricao, 
    statsBase, evolucao, fraquezas, height, weight, ability}) {

    if (numeroPokedex === '000') {
        return ''
    }

    return <div className='paginaPokedex'>
        <CardHeader
            numeroPokedex={numeroPokedex}
            simbolos={simbolos} 
            sprites={sprites}
            tipo={tipo}
            especie={especie}
            statsBase={statsBase}
        /> 
        <CardMain
            descricao={descricao}
            tipo={tipo}
            simbolos={simbolos}
            height={height}
            weight={weight}
            ability={ability}
            statsBase={statsBase}
            fraquezas={fraquezas}
            evolucao={evolucao}
            sprites={sprites}
        />
    </div>
}