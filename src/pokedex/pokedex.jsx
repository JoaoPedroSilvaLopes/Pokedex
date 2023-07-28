import { useRef } from "react";
import { CardPokemon } from "./components";
import useFetch from "../shared/hooks/useFetch";

import "./pokedex.css";

const Pokedex = () => {
  const pokedex = useFetch()
  const ref = useRef(null);

  console.log(pokedex)
  
  const handleLeftClick = (e) => {
    e.preventDefault();
    ref.current.scrollLeft -= ref.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    ref.current.scrollLeft += ref.current.offsetWidth;
  };

  return (
    <>
      <button className="botao" onClick={handleLeftClick}>
        <img
          src="../../pictures/general/setaEsquerda.png"
          width="70%"
          height="auto"
          alt="Scroll Left"
        />
      </button>
      <div className="card" ref={ref}>
        {pokedex.map((pokemon) => (
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
      <button className="botao" onClick={handleRightClick}>
        <img
          src="../../pictures/general/setaDireita.png"
          width="70%"
          height="auto"
          alt="Scroll Right"
        />
      </button>
    </>
  );
};

export default Pokedex;
