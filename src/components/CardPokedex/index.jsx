import './styles.css';

import { CardHeader } from '../CardEstructure/CardHeader'
import { CardMain } from '../CardEstructure/CardMain'

export function CardPokedex({numeroPokedex, simbolos, sprites, tipo, especie, descricao, statsBase, evolucao, fraquezas}) {

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
            statsBase={statsBase}
            simbolos={simbolos} 
            tipo={tipo}
            descricao={descricao}
            evolucao={evolucao}
            sprites={sprites}
            fraquezas={fraquezas}
        />
    </div>
}