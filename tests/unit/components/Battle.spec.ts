import { generateRandomPokemon } from "../helpers";
import { mount } from "@vue/test-utils";
import Battle from "@/components/Battle.vue";

describe("Battle.vue", () => {
  it("renders properly", () => {
    // Arrange
    const firstPokemon = generateRandomPokemon();
    const secondPokemon = generateRandomPokemon();
    const wrapper = mount(Battle, {
      props: {
        firstPokemon,
        secondPokemon,
      },
    });
    const expectedButtonLabel = "Fight!";

    // Act
    const button = wrapper.find("button");

    // Assert
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe(expectedButtonLabel);
  });

  it("emits the fightEnd event", async () => {
    // Arrange
    const firstPokemon = generateRandomPokemon();
    const secondPokemon = generateRandomPokemon();
    const wrapper = mount(Battle, {
      props: {
        firstPokemon,
        secondPokemon,
      },
    });

    // Act
    const button = wrapper.get("button");
    await button.trigger("click");

    // Assert
    expect(wrapper.emitted().fightEnd).toBeTruthy();
  });
});
