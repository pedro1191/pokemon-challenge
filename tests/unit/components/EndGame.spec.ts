import { generateRandomPokemon } from "../helpers";
import { mount } from "@vue/test-utils";
import EndGame from "@/components/EndGame.vue";

describe("EndGame.vue", () => {
  it("renders properly", () => {
    // Arrange
    const champion = generateRandomPokemon();
    const wrapper = mount(EndGame, {
      props: {
        champion,
      },
    });
    const expectedButtonLabel = "Play Again";
    const expectedParagraphText = `${champion.name} is the champion!`;

    // Act
    const button = wrapper.find("button");
    const paragraph = wrapper.find("p");

    // Assert
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe(expectedButtonLabel);
    expect(paragraph.exists()).toBe(true);
    expect(paragraph.text()).toBe(expectedParagraphText);
  });

  it("emits the playAgain event", async () => {
    // Arrange
    const champion = generateRandomPokemon();
    const wrapper = mount(EndGame, {
      props: {
        champion,
      },
    });

    // Act
    const button = wrapper.get("button");
    await button.trigger("click");

    // Assert
    expect(wrapper.emitted().playAgain).toBeTruthy();
  });
});
