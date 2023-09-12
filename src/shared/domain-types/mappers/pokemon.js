import { typeSymbol, typesWeakeness } from "../../utils";

export const PokemonResponseToPokemonData = (pokemonResponse, description) => {
  const {
    id,
    name,
    sprites,
    stats,
    types,
    abilities,
    height,
    weight,
  } = pokemonResponse.data;

  const numeroPokedex = ("0000" + id).slice(-4);
  const especie = name[0].toUpperCase() + name.substring(1);

  const spritesData =
    Math.random() < 0.8 ? sprites.front_default : sprites.front_shiny;

  const statsData = stats.map((baseStat) => {
    return {
      name:
        baseStat.stat.name[0].toUpperCase() +
        baseStat.stat.name.substring(1).replace("-", " "),
      value: baseStat.base_stat,
    };
  });
  const typesData = types.map((type) => type.type.name);
  const abilitiesData = abilities.map((ability) => ability.ability.name);

  return {
    numeroPokedex: numeroPokedex,
    sprites: spritesData,
    especie: especie,
    tipo: typesData,
    statsBase: statsData,
    height: height,
    weight: weight,
    ability: abilitiesData,
    descricao: description,
    evolucao: undefined,

    simbolos: typeSymbol(typesData),
    fraquezas: typesWeakeness(typesData),
  };
};
