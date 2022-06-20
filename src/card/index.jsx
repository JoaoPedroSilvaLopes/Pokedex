import './styles.css';

import { CardPokedex } from '../components/CardPokedex';
import pokedex from '../data/dadosPokedex';

import { useEffect, useState, useRef } from 'react';

export function Card() {

    const ref = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()

        // capturar o tamanho do card e decrementar seu tamanho
        console.log(ref.current.offsetWidth)
        ref.current.scrollLeft -= ref.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()

        // capturar o tamanho do card e acrescentar seu tamanho
        console.log(ref.current.offsetWidth)
        ref.current.scrollLeft += ref.current.offsetWidth
    }

    return (
        <>
            <button className='botao' onClick={handleLeftClick}>
                <img src="../pictures/setaEsquerda.png" width='70%' height='auto' alt="Scroll Left"/>
            </button>
            <div className="card" ref={ref}> {
                pokedex.map(pokemon => (
                    <CardPokedex 
                    key={pokemon.numeroPokedex}
                    numeroPokedex={pokemon.numeroPokedex} 
                    simbolos={pokemon.simbolos} 
                    sprites={pokemon.sprites}
                    tipo={pokemon.tipo}
                    especie={pokemon.especie}
                    descricao={pokemon.descricao}
                    statsBase={pokemon.statsBase}
                    evolucao={pokemon.evolucao}
                    fraquezas={pokemon.fraquezas}
                    />
                ))
                }
            </div>
            <button className='botao' onClick={handleRightClick}>
                <img src="../pictures/setaDireita.png" width='70%' height='auto' alt="Scroll Right"/>
            </button>
        </>
    )
}