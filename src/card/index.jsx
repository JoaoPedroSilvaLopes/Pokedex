import './styles.css';

import { CardPokedex } from '../components/CardPokedex';
import DadosPokedex from '../data/dadosPokedex';
import dadosAuxiliares from '../data/dadosAuxiliares';

import axios from "axios";
import { useEffect, useState, useRef } from 'react';

const url = `https://pokeapi.co/api/v2/pokemon?limit=151`

export function Card() {

    const [pokedex, setPokedex] = useState([])
    const ref = useRef(null)

    useEffect(() => {
        async function buscarPokemon() {
            const pokedexData = await axios.get(url);
            const dadosPokemons = pokedexData.data.results

            for (let index = 0; index <= 150; index++) {
                const urlPokemon = dadosPokemons[index].url

                const poke = await axios.get(urlPokemon)

                const numeroPokedex = ('000' + poke.data.id).slice(-3)
                const especie = poke.data.name[0].toUpperCase() + poke.data.name.substring(1)
                
                const stats = [poke.data.stats[0].base_stat, poke.data.stats[1].base_stat, poke.data.stats[2].base_stat, 
                poke.data.stats[3].base_stat, poke.data.stats[4].base_stat, poke.data.stats[5].base_stat]
                    
                let tipos
                    
                poke.data.types[1] === undefined ? tipos = [poke.data.types[0].type.name] : tipos = [poke.data.types[0].type.name, poke.data.types[1].type.name]

                const evolucao = dadosAuxiliares[index + 1][0]
                const descricao = dadosAuxiliares[index + 1][1]
                    
                //pokedex[index] = new DadosPokedex(numeroPokedex, especie, stats, tipos, dadosAuxiliares[index + 1][0], dadosAuxiliares[index + 1][1])
                //setPokedex(stats)
                setPokedex([numeroPokedex, especie, stats, tipos, evolucao, descricao])
            }
        }
        buscarPokemon()
    }, [])

    console.log(pokedex)

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
            <div className="card" ref={ref}> {pokedex}
            {/* {
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
                } */}
            </div>
            <button className='botao' onClick={handleRightClick}>
                <img src="../pictures/setaDireita.png" width='70%' height='auto' alt="Scroll Right"/>
            </button>
        </>
    )
}