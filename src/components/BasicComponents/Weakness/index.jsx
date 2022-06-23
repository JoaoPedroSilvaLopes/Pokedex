import './styles.css'

import { Image } from '../Image'
import gerarSimbolos from '../../../controlFuncions/GerarSimbolos'

const Weakness = ({simbolo, fraqueza}) => {
    return (
        <div className='fraquezaTipo'>
            <Image caminho={gerarSimbolos(simbolo)} width='100%' height='auto'/>
            <p>{Number(fraqueza).toFixed(2)}</p>
        </div>
    )
}

export default Weakness