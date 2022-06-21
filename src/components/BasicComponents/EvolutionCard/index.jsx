import React from 'react'

import { Image } from '../Image'
import gerarCores from '../../../controlFuncions/GerarCores'

import './styles.css'

const EvolutionCard = ({primeiroSprite, segundoSprite, SpritesDescricao, descricao, tipo}) => {
  return (
    <div className='evo'>
      <Image caminho={primeiroSprite} width='30%' height='auto'/>
        <div className="dadosEvolucao">
            <Image caminho={SpritesDescricao} width='30%' height='auto'/>
            <p className="descricaoEvolucao" style={{color: gerarCores(tipo[0])}}>{descricao}</p>
        </div>
        <Image caminho={segundoSprite} width='30%' height='auto'/>
    </div>
  )
}

export default EvolutionCard