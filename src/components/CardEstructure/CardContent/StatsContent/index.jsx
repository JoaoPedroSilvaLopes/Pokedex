import './styles.css'

import { gerarCores } from '../../../../controlFuncions/GerarCores'

export function StatsContent({statsBase, tipo, fraquezas}) {
    return <div className='conteudoInterno'>
        <p className='paragrafoTituloStats' style={{color: gerarCores(tipo[0])}}>Base stats</p>
        <div className='conteudoStats'>
            <p className='paragrafoStats'>HP -------- {statsBase[0]}</p>
            <p className='paragrafoStats'>Attack ---- {statsBase[1]}</p>
            <p className='paragrafoStats'>Defense --- {statsBase[2]}</p>
            <p className='paragrafoStats'>Sp. Atk --- {statsBase[3]}</p>
            <p className='paragrafoStats'>Sp. Def --- {statsBase[4]}</p>
            <p className='paragrafoStats'>Speed ----- {statsBase[5]}</p>
        </div>
        <p className='paragrafoTituloFraqueza' style={{color: gerarCores(tipo[0])}}>Fraqueza</p>
        <div>
            {fraquezas}
        </div>
    </div>
}