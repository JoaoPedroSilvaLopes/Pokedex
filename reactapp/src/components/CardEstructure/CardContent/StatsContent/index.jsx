import './styles.css'

import { gerarCores } from '../../../../controlFuncions/GerarCores'

export function StatsContent({statsBase, tipo}) {
    return <div className='conteudoInterno'>
        <p className='paragrafotitulostats' style={{color: gerarCores(tipo[0])}}>Base stats</p>
        <div className='conteudostats'>
            <p className='paragrafostats'>HP -------- {statsBase[0]}</p>
            <p className='paragrafostats'>Attack ---- {statsBase[1]}</p>
            <p className='paragrafostats'>Defense --- {statsBase[2]}</p>
            <p className='paragrafostats'>Sp. Atk --- {statsBase[3]}</p>
            <p className='paragrafostats'>Sp. Def --- {statsBase[4]}</p>
            <p className='paragrafostats'>Speed ----- {statsBase[5]}</p>
        </div>
    </div>
}