import { generateRandomPokemon } from "../helpers";
import { mount } from "@vue/test-utils";
import BattleDescription from "@/components/BattleDescription.vue";

describe("BattleDescription.vue", () => {
  it("renders properly", () => {
    // Arrange
    const firstPokemon = generateRandomPokemon();
    const secondPokemon = generateRandomPokemon();
    const wrapper = mount(BattleDescription, {
      props: {
        firstPokemon,
        secondPokemon,
      },
    });
    const expectedText = `${firstPokemon.name} VS ${secondPokemon.name}`;

    // Act
    const pokemonNames = wrapper.find(".pokemons");

    // Assert
    expect(pokemonNames.text()).toBe(expectedText);
  });
});
