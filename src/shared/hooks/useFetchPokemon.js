import { useEffect } from "react";
import { getPokemonData, getPokemonUrl } from "../services";

const useFetchPokemon = (urlPaginate, pokemon, setPokedex) => {
  useEffect(() => {
    const getDataPokemons = async () => {
      const pokemonsUrl = await getPokemonUrl(urlPaginate);
      const pokemonPromises = await pokemonsUrl.map(async (data) => {
        return await getPokemonData(data.url);
      });

      const pokemonsData = await Promise.all(pokemonPromises);
      setPokedex(pokemon.concat(pokemonsData));
    };
    getDataPokemons();
  }, [urlPaginate]);
};

export default useFetchPokemon;
