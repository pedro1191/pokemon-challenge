import IPokemon from "./IPokemon";

export default interface IHomeViewData {
  pokemons: IPokemon[];
  firstSelectedPokemon: IPokemon | null;
  secondSelectedPokemon: IPokemon | null;
}
