import IPokemon from "./IPokemon";

export default interface IHomeViewData {
  loading: boolean;
  pokemons: IPokemon[];
  firstSelectedPokemon: IPokemon | null;
  secondSelectedPokemon: IPokemon | null;
  winner: IPokemon | null;
}
