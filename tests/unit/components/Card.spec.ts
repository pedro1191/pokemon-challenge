import { generateRandomPokemon } from "../helpers";
import { mount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card.vue", () => {
  it("renders properly", () => {
    // Arrange
    const pokemon = generateRandomPokemon();
    const wrapper = mount(Card, {
      props: {
        pokemon,
      },
    });

    // Act
    const wrapperText = wrapper.text();
    const img = wrapper.find("img");

    // Assert
    expect(wrapperText).toBe(pokemon.name);
    expect(img.attributes("src")).toBe(pokemon.sprites.front_default);
  });

  it("emits the onClick event", async () => {
    // Arrange
    const pokemon = generateRandomPokemon();
    const wrapper = mount(Card, {
      props: {
        pokemon,
      },
    });

    // Act
    const article = wrapper.get("article");
    await article.trigger("click");

    // Assert
    expect(wrapper.emitted().onClick).toBeTruthy();
  });
});
