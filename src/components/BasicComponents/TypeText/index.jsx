import './styles.css'

import gerarCores from '../../../controlFuncions/GerarCores'
import gerarStringTipo from '../../../controlFuncions/GerarStringTipo'

import { Image } from '../Image'

export function TypeText({tipo, simbolos, width, height}) {
    return <div className='textoTipo' style={{backgroundColor: gerarCores(tipo)}}>
        <Image caminho={simbolos} width={width} height={height}/>
        <p className='paragrafoTipo'><strong>{gerarStringTipo(tipo)}</strong></p>
    </div>
}