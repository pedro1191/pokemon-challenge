import IPokemon from "@/interfaces/IPokemon";
import IPokemonSearch from "@/interfaces/IPokemonSearch";

export const getPokemons = async (
  props: IPokemonSearch
): Promise<IPokemon[]> => {
  const params = new URLSearchParams({
    limit: `${props.limit}`,
    offset: `${props.offset}`,
  });
  const response = await fetch(
    `${process.env.VUE_APP_POKEMON_API_URL}/pokemon?` + params
  );
  const data = await response.json();

  const fullData = await Promise.all(
    data.results.map(async (partialData: IPokemon) => {
      const response = await fetch(
        `${process.env.VUE_APP_POKEMON_API_URL}/pokemon/${partialData.name}`
      );
      const data = await response.json();

      return {
        name: data.name,
        sprites: {
          front_default: data.sprites.front_default,
        },
        is_selected: false,
      };
    })
  );

  return fullData;
};
