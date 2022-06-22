import './styles.css'

import { Image } from '../../../BasicComponents/Image'
import gerarCores from '../../../../controlFuncions/GerarCores'
import gerarSimbolos from '../../../../controlFuncions/GerarSimbolos';

export function StatsContent({statsBase, tipo, fraquezas}) {

    const vetorTipos = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", 
    "steel", "fire", "water", "grass", "electric", 'psychic', "ice", "dragon", "dark", "fairy"];

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
        <div className='teste'>
            {fraquezas.map((fraqueza, index) => {
                return (
                    <div className='teste1'>
                        <Image caminho={gerarSimbolos([vetorTipos[index]])} width='100%' height='auto'/>
                        <p>{fraqueza}</p>
                    </div>
                )
            })}
        </div>
    </div>
}