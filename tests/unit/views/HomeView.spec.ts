import { faker } from "@faker-js/faker";
import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";
import IPokemon from "@/interfaces/IPokemon";

type RequestResponse = {
  results: IPokemon[];
};

describe("HomeView.vue", () => {
  let mockPokemonList: RequestResponse;

  beforeEach(() => {
    jest.clearAllMocks();
    const numberOfItems = faker.datatype.number({ min: 1, max: 20 });
    const pokemons = [];
    for (let i = 0; i < numberOfItems; i++) {
      pokemons.push({
        name: faker.lorem.words(),
        sprites: {
          front_default: faker.image.dataUri(),
        },
        is_selected: faker.datatype.boolean(),
      });
    }
    mockPokemonList = { results: pokemons };
    globalThis.fetch = jest.fn((url) => {
      if (url === "https://pokeapi.co/api/v2/pokemon") {
        return Promise.resolve({
          json: () => Promise.resolve(mockPokemonList),
        });
      }

      const urlParts = url.split("/");
      const pokemonName = urlParts[urlParts.length - 1];
      const pokemon = mockPokemonList.results.find(
        (pokemon: IPokemon) => pokemon.name === pokemonName
      );

      return Promise.resolve({ json: () => Promise.resolve(pokemon) });
    }) as jest.Mock;
  });

  it("renders properly", () => {
    // Arrange
    const wrapper = mount(HomeView);

    // Act
    const cards = wrapper.findAll(".pokemon-card");

    // Assert
    cards.forEach((card, index) => {
      expect(card.text).toContain(mockPokemonList.results[index].name);
    });
  });
});
