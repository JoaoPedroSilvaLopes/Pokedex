import { PokemonResponseToPokemonData } from "../domain-types/mappers";
import axios from "axios";

export const getPokemonData = async (urlPokemon) => {
  const pokePagination = await axios.get(urlPokemon);
  const pokemonData = PokemonResponseToPokemonData(pokePagination);
  return pokemonData;
};
