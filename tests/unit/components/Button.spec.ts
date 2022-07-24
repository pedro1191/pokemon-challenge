import { mount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  it("renders properly", () => {
    // Arrange
    const wrapper = mount(Button);

    // Act
    const button = wrapper.find("button");

    // Assert
    expect(button.exists()).toBe(true);
  });

  it("emits the onClick event", async () => {
    // Arrange
    const wrapper = mount(Button);

    // Act
    const button = wrapper.get("button");
    await button.trigger("click");

    // Assert
    expect(wrapper.emitted().onClick).toBeTruthy();
  });
});
