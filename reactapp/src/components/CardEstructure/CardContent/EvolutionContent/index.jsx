import './styles.css'

import { Image } from '../../../BasicComponents/Image'
import { gerarCores } from '../../../../controlFuncions/GerarCores'

export function EvolutionContent({tipo, evolucao, sprites}) {
    if (evolucao === undefined) {
        return <div className='conteudoEvo'>
            <p className='paragrafotituloevolucao' style={{color: gerarCores(tipo[0])}}>Evoluções</p>
            <div className='evo'>
                <div className="dadosEvolucao">
                    <Image caminho={sprites[0]} width='30%' height='auto'/>
                    <p className="descricaoEvolucao" style={{color: gerarCores(tipo[0])}}>Não possui evolução</p>
                </div>  
            </div>
        </div>
    }

    const arraySprites = []

    for (let i = 0; i < evolucao[0].length; i++) {
        arraySprites[i] = `../../../pictures/pokemonSprites/${('000' + evolucao[0][i]).slice(-3)}.png`
    }

    if (arraySprites.length === 4) {
        return <div className='conteudoEvo'>
            <p className='paragrafotituloevolucao' style={{color: gerarCores(tipo[0])}}>Evoluções</p>
            <div className='evo'>
                <Image caminho={sprites[0]} width='30%' height='auto'/>
                <div className="dadosEvolucao">
                    <Image caminho={evolucao[2][0]} width='30%' height='auto'/>
                    <p className="descricaoEvolucao" style={{color: gerarCores(tipo[0])}}>{evolucao[1][0]}</p>
                </div>
                <Image caminho={arraySprites[1]} width='30%' height='auto'/>
            </div>
            <div className='evo'>
                <Image caminho={arraySprites[0]} width='30%' height='auto'/>
                <div className="dadosEvolucao">
                    <Image caminho={evolucao[2][1]} width='30%' height='auto'/>
                    <p className="descricaoEvolucao" style={{color: gerarCores(tipo[0])}}>{evolucao[1][1]}</p>
                </div>
                <Image caminho={arraySprites[2]} width='30%' height='auto'/>
            </div>
            <div className='evo'>
                <Image caminho={arraySprites[0]} width='30%' height='auto'/>
                <div className="dadosEvolucao">
                    <Image caminho={evolucao[2][2]} width='30%' height='auto'/>
                    <p className="descricaoEvolucao" style={{color: gerarCores(tipo[0])}}>{evolucao[1][2]}</p>
                </div>
                <Image caminho={arraySprites[3]} width='30%' height='auto'/>
            </div>
        </div>
    }
    else if (arraySprites[2] === undefined) {
        return <div className='conteudoEvo'>
            <p className='paragrafotituloevolucao' style={{color: gerarCores(tipo[0])}}>Evoluções</p>
            <div className='evo'>
                <Image caminho={arraySprites[0]} width='30%' height='auto'/>
                <div className="dadosEvolucao">
                    <Image caminho={evolucao[2][0]} width='30%' height='auto'/>
                    <p className="descricaoEvolucao" style={{color: gerarCores(tipo[0])}}>{evolucao[1][0]}</p>
                </div>
                <Image caminho={arraySprites[1]} width='30%' height='auto'/>
            </div>
        </div>
    }
    else {
        return <div className='conteudoEvo'>
            <p className='paragrafotituloevolucao' style={{color: gerarCores(tipo[0])}}>Evoluções</p>
            <div className='evo'>
                <Image caminho={arraySprites[0]} width='30%' height='auto'/>
                <div className="dadosEvolucao">
                    <Image caminho={evolucao[2][0]} width='30%' height='auto'/>
                    <p className="descricaoEvolucao" style={{color: gerarCores(tipo[0])}}>{evolucao[1][0]}</p>
                </div>
                <Image caminho={arraySprites[1]} width='30%' height='auto'/>
            </div>
            <div className='evo'>
                <Image caminho={arraySprites[1]} width='30%' height='auto'/>
                <div className="dadosEvolucao">
                    <Image caminho={evolucao[2][1]} width='30%' height='auto'/>
                    <p className="descricaoEvolucao" style={{color: gerarCores(tipo[0])}}>{evolucao[1][1]}</p>
                </div>
                <Image caminho={arraySprites[2]} width='30%' height='auto'/>
            </div>
        </div>
    }
}