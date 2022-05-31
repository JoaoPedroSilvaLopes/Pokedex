import './styles.css';

//import { useRef } from 'react';

import { CardPokedex } from '../components/CardPokedex';
import pokedex from '../data/dadosPokedex';

export function Card() {
  return (
    <div className="card"> {
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
  )
}