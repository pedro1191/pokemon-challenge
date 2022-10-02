import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders properly", () => {
    // Arrange
    const wrapper = mount(App, {
      global: {
        stubs: ["RouterView"],
      },
    });

    // Act
    const wrapperText = wrapper.text();

    // Assert
    expect(wrapperText).toBe("Pokémon Game!");
  });
});
