import './styles.css';

import { CardPokedex } from '../components/CardPokedex';
import DadosPokedex from '../data/dadosPokedex';
import dadosAuxiliares from '../data/dadosAuxiliares';

import axios from "axios";
import { useEffect, useState, useRef } from 'react';

export function Card() {

    const [pokedex, setPokedex] = useState([])
    const ref = useRef(null)

    //const url1 = 'https://pokeapi.co/api/v2/evolution-chain/1/'
    //const url2 = 'https://pokeapi.co/api/v2/evolution-trigger/2/'

    useEffect(() => {
        async function buscarPokemon() {
            const pokedex = []
            const dadosPokemons = []

            for (let index = 1; index <= 7; index++) {
                const pokedexData = await axios.get(`https://pokeapi.co/api/v2/generation/${index}/`)
                dadosPokemons.push(pokedexData.data.pokemon_species)
            }

            //const evolucao = await axios.get(url1)
            //console.log(evolucao)
            //const motivoEvolucao = await axios.get(url2)
            //console.log(motivoEvolucao)

            const dataAllPokemons = dadosPokemons.reduce((list, sub) => list.concat(sub), [])

            console.log(dataAllPokemons)

            for (let index = 0; index <= dataAllPokemons.length - 1; index++) {
                let tipos

                const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`)

                const numeroPokedex = ('000' + poke.data.id).slice(-3)
                const especie = poke.data.name[0].toUpperCase() + poke.data.name.substring(1)

                const sprites = 
                [poke.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default, 
                poke.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_shiny]

                const stats = 
                [poke.data.stats[0].base_stat, poke.data.stats[1].base_stat, poke.data.stats[2].base_stat, 
                poke.data.stats[3].base_stat, poke.data.stats[4].base_stat, poke.data.stats[5].base_stat]
                    
                poke.data.types[1] === undefined ? tipos = [poke.data.types[0].type.name] : tipos = [poke.data.types[0].type.name, poke.data.types[1].type.name]

                console.log(poke)
                //console.log(sprites, numeroPokedex, especie, stats, tipos)

                //pokedex[index] = new DadosPokedex(numeroPokedex, sprites, especie, stats, tipos, dadosAuxiliares[index + 1][0], dadosAuxiliares[index + 1][1])
                pokedex[index] = new DadosPokedex(numeroPokedex, sprites, especie, stats, tipos)
            }
            setPokedex(pokedex)
        }
        buscarPokemon()
    }, [])

    const handleLeftClick = (e) => {
        e.preventDefault()
        // capturar o tamanho do card e decrementar seu tamanho
        //console.log(ref.current.offsetWidth)
        ref.current.scrollLeft -= ref.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        // capturar o tamanho do card e acrescentar seu tamanho
        //console.log(ref.current.offsetWidth)
        ref.current.scrollLeft += ref.current.offsetWidth
    }

    return (
        <>
            <button className='botao' onClick={handleLeftClick}>
                <img src="../pictures/setaEsquerda.png" width='70%' height='auto' alt="Scroll Left"/>
            </button>
            <div className="card" ref={ref}>{
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