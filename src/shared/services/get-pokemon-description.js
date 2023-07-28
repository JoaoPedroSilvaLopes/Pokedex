import axios from "axios";

export const getPokemonDescription = async (urlSpecie) => {
  const data = await axios.get(urlSpecie);
  return data
};
