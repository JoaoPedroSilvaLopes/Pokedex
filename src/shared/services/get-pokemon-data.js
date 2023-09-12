import { PokemonResponseToPokemonData } from "../domain-types/mappers";
import axios from "axios";

export const getPokemonData = async (urlPokemon) => {
  const pokePagination = await axios.get(urlPokemon);
  const { data } = await axios.get(pokePagination.data.species.url);

  const description = data.flavor_text_entries.map((text) =>
    text.language.name === "en" ? text.flavor_text : undefined
  );

  const pokemonData = PokemonResponseToPokemonData(pokePagination, description);
  return pokemonData;
};
