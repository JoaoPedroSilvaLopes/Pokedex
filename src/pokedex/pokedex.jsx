import { useRef, useState, useEffect } from "react";
import { CardPokemon } from "./components";
import useFetchPokemon from "../shared/hooks/useFetchPokemon";

import "./pokedex.css";

const Pokedex = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [height, setHeight] = useState(0);

  const limit = 20;
  const ref = useRef(null);
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${pagination}`;

  useFetchPokemon(url, pokedex, setPokedex);

  const handleScroll = () => {
    const scrollHeight = ref.current.scrollHeight - ref.current.offsetHeight;
    const percent = ref.current.scrollTop / scrollHeight;

    if (percent > 0.75 && height !== scrollHeight) {
      setPagination(pagination + 20);
      setHeight(scrollHeight);
    }
  };

  return (
    <div className="content">
      <div className="card" ref={ref} onScroll={() => handleScroll()}>
        {pokedex.length > 0 &&
          pokedex.map((pokemon) => (
            <CardPokemon
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
          ))}
      </div>
    </div>
  );
};

export default Pokedex;
