import './styles.css'

import { DataText } from '../../../BasicComponents/DataText'
import { TypeText } from '../../../BasicComponents/TypeText'

import gerarCores from '../../../../controlFuncions/GerarCores'

export function AboutContent({descricao, tipo, simbolos}) {
    return <div className='conteudoAbout'>
        <p className='descricaopokedex' style={{backgroundColor: gerarCores(tipo[0])}}>{descricao}</p>
        <div className='tiposPokedex'>
            <TypeText tipo={tipo[0]} simbolos={simbolos[0]} width={'20%'} height={'auto'}/>
            <TypeText tipo={tipo[1]} simbolos={simbolos[1]} width={'20%'} height={'auto'}/>
        </div>
        <p className="paragrafoDadosPokedex" style={{color: gerarCores(tipo[0])}}>Dados Pokédex</p>
        <DataText descricaoDado={'Altura'} dado={'XXX m'} />
        <DataText descricaoDado={'Peso'} dado={'XXX kg'} />
        <DataText descricaoDado={'Habilidade'} dado={'XXX'} />
        <DataText descricaoDado={'Habilidade Secreta'} dado={'XXX'} />
    </div>
}