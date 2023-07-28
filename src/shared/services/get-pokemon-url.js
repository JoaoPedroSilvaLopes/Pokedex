import axios from "axios";

export const getPokemonUrl = async (urlPaginate) => {
  const poke = await axios.get(urlPaginate);
  return poke.data.results
};
