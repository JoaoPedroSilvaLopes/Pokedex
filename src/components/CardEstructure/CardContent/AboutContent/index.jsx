import './styles.css'

import { DataText } from '../../../BasicComponents/DataText'
import { TypeText } from '../../../BasicComponents/TypeText'

import gerarCores from '../../../../controlFuncions/GerarCores'

export function AboutContent({descricao, tipo, simbolos, height, weight, ability}) {

    return <div className='conteudoAbout'>
        <p className='descricaopokedex' style={{backgroundColor: gerarCores(tipo[0])}}>{descricao}</p>
        <div className='tiposPokedex'>
            <TypeText tipo={tipo[0]} simbolos={simbolos[0]} width={'20%'} height={'auto'}/>
            <TypeText tipo={tipo[1]} simbolos={simbolos[1]} width={'20%'} height={'auto'}/>
        </div>
        <p className="paragrafoDadosPokedex" style={{color: gerarCores(tipo[0])}}>Data Pokédex</p>
        <DataText descricaoDado={'Height'} dado={`${height / 10} m`} />
        <DataText descricaoDado={'Weight'} dado={`${weight / 10} Kg`} />
        <DataText descricaoDado={'Ability'} dado={ability[0]} />
        <DataText descricaoDado={'Hidden Ability'} dado={ability[1]} />
    </div>
}