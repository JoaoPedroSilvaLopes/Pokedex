import './styles.css';

import gerarCores from '../../../controlFuncions/GerarCores'
import { Image } from '../../BasicComponents/Image'

export function CardHeader({numeroPokedex, simbolos, sprites, tipo, especie}) {
    return <div className='fotopokemon' style={{backgroundColor: gerarCores(tipo[0])}}>
        <header>
            <p className='numeroPokedex'>#{numeroPokedex}</p>
            <p className='especie'><strong>{especie}</strong></p>
            <Image caminho={simbolos[0]} width='10%' height='auto'/>
            <Image caminho={simbolos[1]} width='10%' height='auto'/>
        </header>
        <Image className='spritesPokemon' caminho={sprites[0]} width='50%' height='auto'/>
    </div>
}