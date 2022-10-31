import "./styles.css";

import { CardPokedex } from "../components/CardPokedex";
import { useEffect, useState, useRef } from "react";
import useFetch from "./useFetch";

export function Card() {
  const [urlPaginate, setUrlPaginate] = useState(
    `https://pokeapi.co/api/v2/pokemon/?limit=6&offset=0`
  );
  const [pokedex, setPokedex] = useState([]);
  const ref = useRef(null);

  const { pokedexLoop, nextPage } = useFetch(urlPaginate);

  useEffect(() => {
    //console.log(pokedexLoop);
    setPokedex(pokedexLoop);
    setUrlPaginate(nextPage);
  }, [urlPaginate]);

  console.log("teste", pokedex);

  const handleLeftClick = (e) => {
    e.preventDefault();
    ref.current.scrollLeft -= ref.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    ref.current.scrollLeft += ref.current.offsetWidth;
    addPokedex();
  };

  return (
    <>
      <button className="botao" onClick={handleLeftClick}>
        <img
          src="../pictures/setaEsquerda.png"
          width="70%"
          height="auto"
          alt="Scroll Left"
        />
      </button>
      <div className="card" ref={ref}>
        {pokedex.map((pokemon) => (
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
        ))}
      </div>
      <button className="botao" onClick={handleRightClick}>
        <img
          src="../pictures/setaDireita.png"
          width="70%"
          height="auto"
          alt="Scroll Right"
        />
      </button>
    </>
  );
}
