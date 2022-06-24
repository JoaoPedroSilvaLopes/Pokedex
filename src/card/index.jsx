import './styles.css';

import { CardPokedex } from '../components/CardPokedex';
import DadosPokedex from '../data/dadosPokedex';
import dadosAuxiliares from '../data/dadosAuxiliares';

import axios from "axios";
import { useEffect, useState, useRef } from 'react';

export function Card() {
    const [intervalo, setIntervalo] = useState([0, 4])
    const [pokedex, setPokedex] = useState([])
    const ref = useRef(null)

    let previousIndex = intervalo[0]
    let finalIndex = intervalo[1]
    let pokedexLoop = []

    useEffect(() => {
        async function buscarPokemon() {
            for (let index = intervalo[0]; index <= intervalo[1]; index++) {
                if (index > 808) {
                    return
                }

                let tipos
                let ability

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

                poke.data.abilities[1] === undefined ? 
                ability = [poke.data.abilities[0].ability.name[0].toUpperCase() + poke.data.abilities[0].ability.name.substring(1), "-------"] 
                : 
                ability = [poke.data.abilities[0].ability.name[0].toUpperCase() + poke.data.abilities[0].ability.name.substring(1), poke.data.abilities[1].ability.name[0].toUpperCase() + poke.data.abilities[1].ability.name.substring(1)]

                const height = poke.data.height
                const weight = poke.data.weight

                //=======================DESCRIÇÃO======================
                const poke1 = await axios.get(poke.data.species.url)
                //console.log(poke1)
                const array = poke1.data.flavor_text_entries
                //console.log(array.length)
                const descricao = poke1.data.flavor_text_entries[array.length - 3].flavor_text
                //======================================================

                pokedexLoop[index] = new DadosPokedex(numeroPokedex, sprites, especie, stats, tipos, height, weight, ability, descricao, undefined)
            }
            setPokedex(pokedex.concat(pokedexLoop))
        }
        buscarPokemon()
    }, [intervalo])

    const handleLeftClick = (e) => {
        e.preventDefault()
        ref.current.scrollLeft -= ref.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        ref.current.scrollLeft += ref.current.offsetWidth
        addPokedex()
    }

    const addPokedex = () => {
        previousIndex = finalIndex + 1
        finalIndex = finalIndex + 5
        return setIntervalo([previousIndex, finalIndex])
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
                        sprites={pokemon.sprites}
                        especie={pokemon.especie}
                        tipo={pokemon.tipo}
                        statsBase={pokemon.statsBase}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        ability={pokemon.ability}

                        descricao={pokemon.descricao}
                        evolucao={pokemon.evolucao}
                        simbolos={pokemon.simbolos} 
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