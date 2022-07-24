import IPokemon from "@/interfaces/IPokemon";

export const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomLoser = (
  firstPokemon: IPokemon,
  secondPokemon: IPokemon
): IPokemon => {
  const pokemons = [firstPokemon, secondPokemon];
  const randomIndex = getRandomNumberBetween(0, 1);

  return pokemons[randomIndex];
};
