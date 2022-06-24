import './styles.css'

import gerarCores from '../../../../controlFuncions/GerarCores'
import DataStats from '../../../BasicComponents/DataStats';
import Weakness from '../../../BasicComponents/Weakness';


export function StatsContent({statsBase, tipo, fraquezas}) {

    const vetorTipos = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", 
    "steel", "fire", "water", "grass", "electric", 'psychic', "ice", "dragon", "dark", "fairy"];

    return <div className='conteudoInterno'>
        <p className='paragrafoTituloStats' style={{color: gerarCores(tipo[0])}}>Base stats</p>
        <div className='conteudoStats'>
            <DataStats textStat="HP" stat={statsBase[0]}/>
            <DataStats textStat="Attack" stat={statsBase[1]}/>
            <DataStats textStat="Defense" stat={statsBase[2]}/>
            <DataStats textStat="Sp. Atk" stat={statsBase[3]}/>
            <DataStats textStat="Sp. Def" stat={statsBase[4]}/>
            <DataStats textStat="Speed " stat={statsBase[5]}/>
        </div>
        <p className='paragrafoTituloFraqueza' style={{color: gerarCores(tipo[0])}}>Weakness</p>
        <div className="fraquezas">
            {fraquezas.map((fraqueza, index) => {
                return (
                    <Weakness key={index} simbolo={[vetorTipos[index]]} fraqueza={fraqueza}/>
                )
            })}
        </div>
    </div>
}