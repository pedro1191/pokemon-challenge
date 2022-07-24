import IPokemon from "@/interfaces/IPokemon";

export const getPokemons = async (): Promise<IPokemon[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();

  const fullData = await Promise.all(
    data.results.map(async (partialData: IPokemon) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${partialData.name}`
      );
      const data = await response.json();

      return {
        name: data.name,
        sprites: {
          front_default: data.sprites.front_default,
        },
      };
    })
  );

  return fullData;
};
