import DadosPokedex from "../data/dadosPokedex";
import axios from "axios";
import { useEffect } from "react";

const useFetch = (urlPaginate) => {
  let pokedexLoop = [];
  let nextPage;

  useEffect(() => {
    async function buscarPokemon() {
      const poke = await axios.get(urlPaginate);
      const result = poke.data.results;
      nextPage = poke.data.next;

      for (let i = 0; i < result.length; i++) {
        const pokePagination = await axios.get(result[i].url);
        const {
          id,
          name,
          sprites,
          stats,
          types,
          abilities,
          height,
          weight,
          species,
        } = pokePagination.data;
        const { data } = await axios.get(species.url);

        const numeroPokedex = ("000" + id).slice(-3);
        const especie = name[0].toUpperCase() + name.substring(1);

        const sprites1 = [
          sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
            .front_default,
          sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
            .front_shiny,
        ];
        const stats1 = stats.map((baseStat) => baseStat.base_stat);
        const types1 = types.map((type) => type.type.name);
        const abilities1 = abilities.map((ability) => ability.ability.name);

        const arrayDescription = data.flavor_text_entries.map((text) =>
          text.language.name === "en" ? text.flavor_text : undefined
        );

        pokedexLoop[id - 1] = new DadosPokedex(
          numeroPokedex,
          sprites1,
          especie,
          stats1,
          types1,
          height,
          weight,
          abilities1,
          arrayDescription[0],
          undefined
        );
      }
    }
    buscarPokemon();
  }, []);

  return { pokedexLoop, nextPage };
};

export default useFetch;
