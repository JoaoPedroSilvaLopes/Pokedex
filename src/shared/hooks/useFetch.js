import { useEffect, useState } from "react";
import { getPokemonData, getPokemonUrl } from "../services";

const useFetch = () => {
  const urlPaginate = `https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0`;
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    const getDataPokemons = async () => {
      const pokemonsUrl = await getPokemonUrl(urlPaginate);
      const pokemonPromises = await pokemonsUrl.map(async (data) => {
        return await getPokemonData(data.url);
      });

      const pokemonsData = await Promise.all(pokemonPromises)
      setPokedex(pokemonsData)
    };
    getDataPokemons();
  }, []);

  return pokedex;
};

export default useFetch;
